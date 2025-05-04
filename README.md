# SportX

## Objective

SportX is a full-stack web application that displays a list of sports and allows users to view participants associated with each sport. Each participant can belong to multiple sports. The system supports dynamic routing and RESTful APIs and is built for performance and scalability.

## Technology Used

- **Frontend**: React (Vite)
- **Backend**: Django (REST Framework)
- **Database**: PostgreSQL
- **Web Server**: Nginx
- **Application Server**: Gunicorn
- **SSL**: Let's Encrypt (Certbot)
- **Hosting**: Azure VM (Ubuntu 24.04)

## Features

- Home page introducing the app
- Dashboard with sports listed as cards
- Participant page showing sport-specific details
- RESTful API built with Django
- Secure deployment using Nginx reverse proxy with HTTPS

## Installation (Local Deployment)

### 1. Prerequisites

- Install PostgreSQL
- Create a database and user:

```
sudo -u postgres psql
CREATE DATABASE sportx_db;
CREATE USER sportx_user WITH PASSWORD 'yourpassword';
GRANT ALL PRIVILEGES ON DATABASE sportx_db TO sportx_user;
```

Ensure PostgreSQL is running:

```
sudo systemctl status postgresql
```

### 2. Clone the Repository

```
git clone <your-repo-url>
cd SportX
```

### 3. Create .env Files

#### Backend .env

Create a .env file inside the backend folder with the following:

```
# Security
SECRET_KEY=your_secret_key
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost

# Database
DB_NAME=sportx_db
DB_USER=sportx_user
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
```

#### Frontend .env

Create a .env file inside the frontend folder with:

```
# Vite React .env
VITE_BACKEND_URL=http://127.0.0.1:8000/api
```

### 4. Set Up Backend

```
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runscript populate_data  # optional script to populate sample data
python manage.py runserver
```

### 5. Set Up Frontend

```
cd ../frontend
npm install
npm run dev
```

## Production Deployment

### Backend (Gunicorn Systemd Service)

Create a systemd service file:

```
# /etc/systemd/system/sportx-gunicorn.service

[Unit]
Description=gunicorn daemon for SportX Django
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/home/<username>/SportX
ExecStart=/home/<username>/<venv>/SportX/bin/gunicorn --workers 3 --bind 127.0.0.1:8000 <project_name>.wsgi:application

[Install]
WantedBy=multi-user.target
```

Then enable and start the service:

```
sudo systemctl daemon-reexec
sudo systemctl enable sportx-gunicorn
sudo systemctl start sportx-gunicorn
```

### Frontend (Build and Deploy)

```
cd frontend
npm run build
```

Move the contents of the dist folder to a suitable Nginx-served directory, e.g., `/var/www/sportx`, and set permissions:

```
sudo cp -r dist /var/www/sportx
sudo chown -R www-data:www-data /var/www/sportx
```

### Nginx Configuration

Create an Nginx site config:

```
# /etc/nginx/sites-available/sportx

server {
    server_name yourdomain.com;

    # Serve React frontend
    location / {
        root /var/www/sportx;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Proxy API requests to Django backend (Gunicorn)
    location /api/ {
        proxy_pass http://127.0.0.1:8000;  # No trailing slash
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Enable the config:

```
sudo ln -s /etc/nginx/sites-available/sportx /etc/nginx/sites-enabled/
sudo nginx -t  # check for syntax errors
sudo systemctl reload nginx
```

### SSL with Let's Encrypt

Install and run Certbot:

```
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

Certbot will automatically update your Nginx config to use HTTPS.

## Deployment Details

- Azure Ubuntu 24.04 VM (4 vCPUs, 2GB RAM)
- Public ports: 80, 443 for web
- Backend served on 127.0.0.1:8000, proxied by Nginx
- HTTPS secured via Let's Encrypt

## More Details

Check the README files in:

- frontend/README.md
- backend/README.md

