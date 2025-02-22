FROM node:14

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 10000

# Start the application
CMD ["node", "solution.js"]
