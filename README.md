# Paradise Nursery Shopping Application

## Project Overview

Paradise Nursery is a dynamic e-commerce web application built with React and Redux, designed to help plant lovers browse, select, and purchase houseplants online.

## Features

- **Landing Page** – A welcoming hero section with the company name and a "Get Started" call-to-action.
- **Product Listing** – Browse 18+ unique houseplants grouped into 3 categories (Air Purifying, Low Maintenance, Tropical), each with an image, name, and price.
- **Shopping Cart** – Add plants to your cart, adjust quantities, remove items, and view a running total.
- **Redux State Management** – Global cart state managed via `@reduxjs/toolkit`.
- **Responsive Navbar** – Navigation links to Home, Plants, and Cart with a live item count badge.

## Tech Stack

| Layer       | Technology                  |
|-------------|------------------------------|
| UI          | React 18                     |
| State       | Redux Toolkit (`CartSlice`)  |
| Routing     | React Router DOM             |
| Styling     | CSS Modules / plain CSS      |
| Build Tool  | Vite                         |

## Project Structure

```
paradise-nursery/
├── public/
│   └── assets/             # Plant images
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── CartItem.jsx
│   │   └── ProductList.jsx
│   ├── store/
│   │   └── CartSlice.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── README.md
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Author

Built as a final project for the IBM Full-Stack JavaScript Developer course.
