# TechStore – MERN Stack Product Management

A full-stack e-commerce product catalogue built for **Internship Task 1**. Products are stored in MongoDB, served via an Express REST API, and displayed in a responsive React frontend.

## Architecture

```
React UI → Axios → Express REST API → Mongoose → MongoDB
```

## Features

- **Home Page** – Hero section, store introduction, featured products
- **Products Page** – Product grid with search and category filter
- **CRUD Operations** – Create, read, update, and delete products
- **Reusable ProductCard** – Props-driven card component
- **Responsive Design** – Works on desktop and mobile
- **Loading, empty, and notification states**

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React 18, Vite, React Router, Axios |
| Backend  | Node.js, Express                    |
| Database | MongoDB, Mongoose                   |

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally, or a MongoDB Atlas connection string

## Setup

### 1. Clone / open the project

```bash
cd Task1
```

### 2. Backend

```bash
cd backend
npm install
```

Copy the environment file and adjust if needed:

```bash
copy .env.example .env
```

Start the API server:

```bash
npm run dev
```

The API runs at **http://localhost:5000**. Sample products are seeded automatically on first run.

### 3. Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The React app runs at **http://localhost:5173**.

## API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/products`       | List products (search, filter) |
| GET    | `/api/products/:id`   | Get single product       |
| POST   | `/api/products`       | Create product           |
| PUT    | `/api/products/:id`   | Update product           |
| DELETE | `/api/products/:id`   | Delete product           |
| GET    | `/api/health`         | Health check             |

### Query parameters (GET /api/products)

- `search` – Filter by product name (case-insensitive)
- `category` – Filter by category (e.g. `Audio`, `Accessories`)

### Product model

```json
{
  "name": "string",
  "price": "number",
  "category": "string",
  "description": "string",
  "image": "string (URL)",
  "inStock": "boolean"
}
```

## Project Structure

```
Task1/
├── backend/
│   ├── models/Product.js
│   ├── routes/productRoutes.js
│   ├── seed.js
│   └── server.js
└── frontend/
    └── src/
        ├── api/products.js
        ├── components/
        │   ├── ProductCard.jsx
        │   ├── ProductForm.jsx
        │   ├── Navbar.jsx
        │   └── ...
        └── pages/
            ├── Home.jsx
            └── Products.jsx
```

## Task 1 Requirements Checklist

- [x] React frontend
- [x] Reusable Card component with props (`ProductCard`)
- [x] Express + MongoDB CRUD API for products
- [x] Frontend/backend integration via Axios
- [x] React app displaying data from the backend API

## License

MIT – For internship submission purposes.
