# SportX Backend

## Overview

This is the backend of the SportX web application, built using Django—a high-level Python web framework that provides rapid development, scalability, and secure defaults. It serves a REST API that powers the React-based frontend.

The backend handles:

- Sports and participant data modeling using Django ORM
- API development using Django's built-in features (no DRF used to keep it minimal and simple)
- Database management with PostgreSQL
- Data population via a custom management command
- Secure deployment through Gunicorn and Nginx with reverse proxying

## Project Structure

```
.
├── api/                    # Core Django app handling sports and participants
│   ├── admin.py            # Registering models for Django Admin
│   ├── apps.py             # App config
│   ├── models.py           # Database schema using Django ORM
│   ├── serializers.py      # Custom serializers (if used for JSON formatting)
│   ├── views.py            # API view functions
│   ├── urls.py             # API routes
│   ├── migrations/         # Auto-generated migration files
│   └── management/         # Custom management command for populating data
│       └── commands/
│           └── populate_data.py  # Script to insert default records
│
├── backend/                # Django project folder
│   ├── settings.py         # Core settings: database, CORS, env support
│   ├── urls.py             # Root URL config
│   └── wsgi.py             # WSGI entry point for Gunicorn
│
├── manage.py               # CLI utility for Django
├── requirements.txt        # Python dependencies
└── README.md               # You're reading this!
```

## Database Schema

The schema follows a many-to-many relationship:

- A Sport can have multiple Participants
- A Participant can be associated with multiple Sports

### Models

#### Sport
| Field | Type |
|-------|------|
| id | AutoField |
| name | CharField |
| description | TextField |

#### Participant
| Field | Type |
|-------|------|
| id | AutoField |
| name | CharField |
| age | IntegerField |

### Relationship

```
participants = models.ManyToManyField(Participant, related_name="sports")
```

This allows querying both directions:

- From a Sport, you can access all its Participants
- From a Participant, you can list all the Sports they are part of

### ER Diagram

```
┌────────────┐        ┌──────────────────┐        ┌────────────────────┐
│  Sport     │        │ Sport_Participant│        │ Participant        │
├────────────┤        ├──────────────────┤        ├────────────────────┤
│ id         │◄──────►│ sport_id         │        │ id                 │
│ name       │        │ participant_id   │◄──────►│ name               │
│ description│        └──────────────────┘        │ age                │
└────────────┘                                    └────────────────────┘
```

This shows the implicit intermediate table created by Django to manage the many-to-many link.

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/sports | GET | Get a list of all sports |
| /api/sports/<id> | GET | Get details of a sport + participants |


## Summary

This backend is lightweight, secure, and follows scalable Django conventions. With reusable models, clean API design, and support for production deployments via Gunicorn + Nginx, it's ready for both development and real-world use.