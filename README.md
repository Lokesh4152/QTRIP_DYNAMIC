# QTrip Dynamic Website

QTrip is a dynamic travel website that offers a wide range of adventures in different cities. This README provides an overview of the project, its features, and how to deploy and use it.

## Project Overview

- Created web pages using HTML, CSS, and JavaScript.
- Enhanced user experience with multi-select filters and image carousels.
- Implemented conditional rendering of page elements.
- Utilized `localStorage` to persist user preferences on the client-side.
- Integrated a reservation system using the Fetch API.
- Deployed the website using Netlify for the frontend and Heroku for the backend.

## Deployment

### Backend Deployment (Heroku)

The backend of QTrip has been deployed to Render. You can access it [here](https://qtrip-dynamic-nr4v.onrender.com).

### Frontend Deployment (Netlify)

The dynamic frontend of QTrip is hosted on Netlify. Visit the website [here](https://qtripdynamicfrontend-16.netlify.app).

## Adventure Details Page

- Added a sleek image carousel using Bootstrap.
- Implemented reservation logic with a POST request to the backend.
- Conditionally rendered the "Sold out" panel and the reservations page based on API responses.

## Reservations Page

The Reservations page allows users to view all their reservations made through QTrip.

## Adventures Page

- Fetched adventures data for a specific city using query parameters.
- Populated the adventure page's DOM with API response data.
- Implemented multi-select and single-select filters.
- Persisted user-selected filters in `localStorage`.

## Landing Page

- Dynamically retrieved cities' data from the backend REST API.
- Created a responsive grid for cities using Bootstrap classes.
- Dynamically plugged in city data to the Landing page's DOM.

## Skills Used

- HTML, CSS, JavaScript
- Bootstrap for responsive design and carousels
- Fetch API for making REST API requests
- Conditional rendering of page elements
- Local storage for persisting user preferences
- Deployment on Heroku (backend) and Netlify (frontend)

## Live link to pages

[Adventure Details Page](https://qtripdynamicfrontend-16.netlify.app/pages/adventures/detail/?adventure=2447910730)

[Image Carousel](https://qtripdynamicfrontend-16.netlify.app/pages/adventures/detail/?adventure=2447910730)
[Reservations Page](https://qtripdynamicfrontend-16.netlify.app/pages/adventures/reservations/)
[Adventures Page](https://qtripdynamicfrontend-16.netlify.app/pages/adventures/?city=bengaluru)
[Landing Page](https://qtripdynamicfrontend-16.netlify.app/)

## Getting Started

1. Clone the project repository.
2. Follow the deployment instructions to set up the frontend and backend.
3. Explore the various features of the QTrip website.
