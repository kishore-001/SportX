# SportX Frontend

## Overview

This is the frontend of the SportX web application, developed using React with Vite for fast build times, hot module reloading, and an optimized developer experience. The frontend provides a clean and responsive UI to navigate sports data and their respective participants fetched from the backend API.

## Project Structure

The frontend code is organized inside the src directory for clarity and modularity:

```
src/
├── App.jsx             # Root component
├── App.css             # Global styles for App
├── main.jsx            # Entry point
├── index.css           # Global CSS
│
├── assets/             # Static image and icon assets
│   ├── icon/           # PNG icons
│   ├── img/            # Static images
│   ├── icons.jsx       # Icons as components
│   └── img.jsx         # Image imports as components
│
├── components/         # Reusable UI components
│   ├── Navbar/         # Navigation bar
│   └── Footer/         # Footer component
│
└── pages/              # Page-specific components
    ├── home/           # Home page content
    ├── dashboard/      # Sport cards and navigation
    ├── participant/    # Details of participants for a selected sport
    └── notfound/       # Fallback 404 page
```

## API Integration

This application communicates with the Django backend using REST APIs. Axios or the native fetch API is used for making requests.

- **Dashboard Page**: Fetches the list of sports from
  ```
  GET /api/sports
  ```

- **Participant Page**: Fetches details of a specific sport and its participants using the sport ID
  ```
  GET /api/sports/<id>
  ```

The backend base URL is set using a Vite environment variable:

```
# .env
VITE_BACKEND_URL=https://yourdomain.com/api
```

This allows for smooth switching between local development and production environments.

## Pages Explained

- **Home (/)**
  A landing page introducing the purpose of SportX and includes a link to the dashboard.

- **Dashboard (/dashboard)**
  Displays sports as interactive cards, fetched dynamically from the backend. Each card includes a button to view participants of that sport.

- **Participant (/participant/:id)**
  Shows detailed information for the selected sport including all its associated participants.

- **NotFound (*)**
  Handles unmatched routes with a custom 404 message.

## Summary

This frontend offers a clean, responsive interface that is easy to use and extend. Built with best practices using Vite and React, it is optimized for both developer efficiency and user experience.