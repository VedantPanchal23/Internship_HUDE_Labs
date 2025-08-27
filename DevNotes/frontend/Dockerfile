# Stage 1: Build React app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./ 

# Install dependencies
RUN npm install

# Copy rest of the frontend source code
COPY frontend/. .

# Build the React app
RUN npm run build

# Stage 2: Serve the build with nginx
FROM nginx:alpine

# Copy the built React app from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
