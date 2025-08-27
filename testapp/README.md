# TestApp

A simple Node.js application for testing and demonstration purposes. Includes a basic server and static file serving.

## Features
- Node.js Express server
- Serves static HTML and CSS files
- Docker support
- MongoDB integration via `mongodb.yaml`

## Folder Structure
- `public/` - Static files (HTML, CSS)
- `server.js` - Main server file
- `mongodb.yaml` - MongoDB deployment configuration
- `Dockerfile` - Docker configuration

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   node server.js
   ```
3. (Optional) Run with Docker:
   ```sh
   docker build -t testapp .
   docker run -p 3000:3000 testapp
   ```