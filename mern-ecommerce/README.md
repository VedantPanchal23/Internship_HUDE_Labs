# MERN Ecommerce

This project is a full-stack ecommerce application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features
- User authentication and authorization
- Product listing and management
- Shopping cart and checkout
- Order management (admin and user views)
- Product reviews and ratings
- Admin dashboard for managing products and orders

## Folder Structure
- `client/` - React frontend
- `server/` - Express.js backend API
- `docker-compose.yaml` - Docker configuration for development

## Getting Started
1. Clone the repository.
2. Install dependencies in both `client` and `server` folders:
   ```sh
   cd client && npm install
   cd ../server && npm install
   ```
3. Start the development servers:
   - Frontend: `npm run dev` in `client`
   - Backend: `npm run dev` in `server`
4. (Optional) Use Docker Compose for containerized development:
   ```sh
   docker-compose up --build
   ```

## Environment Variables
- Configure environment variables in `.env` files for both frontend and backend as needed.
