# Book Library App

Book Library App is a web application that allows you to Create, Read, Update, and Delete book information. This README will guide you through setting up the project and running it in your development environment.

## Technologies Used

The key technologies and frameworks used in this project are:

- React
- Node.js
- Laravel

## Prerequisites

Before you start, make sure you have the following software and dependencies installed on your system:

- Node.js (v14 or later)
- npm (v7 or later)
- PHP (v7.4 or later)
- Composer (v2 or later)
- Database (e.g., MySQL, PostgreSQL)

## Installation

### Frontend Dependencies

To install the frontend dependencies, navigate to the `frontend` directory and run the following command:

```bash
cd frontend
npm install
```

### Backend Dependencies

To install the backend dependencies, navigate to the `php_backend` directory and run the following command:

```bash
cd php_backend
composer install
```

## Configuration

### Running the Development Environment (Frontend)

To start the Node.js development server for the frontend, navigate to the `frontend` directory and run:

```bash
cd frontend
npm start
```

### Running the Development Environment (Backend)

To start the Node.js development server for the backend, navigate to the `backend` directory and run:

```bash
cd backend
node index.js
```

### Running the Development Environment (PHP Backend)

1. Start the PHP development server by navigating to the `php_backend` directory and running:

```bash
cd php_backend
php artisan serve
```

2. For the PHP backend, configure a MySQL database on your localhost. Use the provided `book.sql` file for database configuration.

You are now ready to use the Book Library App. Open your web browser and access the application at the provided URL to interact with it.

Enjoy managing your book library with this app!