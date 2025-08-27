# Dev Mode Dockerfile (Vite):
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm cache clean --force
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

# Production Mode Dockerfile (Vite):
# FROM node:20

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# EXPOSE 4173
# CMD ["npm", "run", "preview"]
