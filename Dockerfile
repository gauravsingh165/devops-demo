# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy remaining code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "app.js"]