# FROM node

# ENV MONGO_DB_USERNAME=admin \
#     MONGO_DB_PWD=pass

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 5050

# CMD ["npm","start"]


# # # Use official Node.js LTS image
# # FROM node:18

# # # Set working directory
# # WORKDIR /app

# # # Copy package files and install dependencies
# # COPY package*.json ./
# # RUN npm install

# # # Copy the rest of your application code
# # COPY . .

# # # Expose the port your app runs on
# # EXPOSE 5050

# # # Start the application
# # CMD ["npm", "start"]



FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=pass

RUN mkdir - p testapp

COPY ./testapp

CMD ["node","/testapp/server.js"]