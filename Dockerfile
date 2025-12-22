# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set PUBLIC_URL for Docker environment (not GitHub Pages)
ENV PUBLIC_URL=/

# Build the React app (assuming default build script)
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy built app from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
