# Use the official Node.js image as a base
FROM node:18

# Set the working directory
WORKDIR /backend

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5000

# Command to run the application
CMD ["node", "src/index.js"]