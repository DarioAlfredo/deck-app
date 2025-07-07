# Use the official Node.js image as a base
FROM node:18

# Set the working directory
WORKDIR /frontend

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Expose the application port
EXPOSE 3000

# Command to serve the application
CMD ["serve", "-s", "build"]
