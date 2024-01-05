# Use the official Node.js image as a base image
FROM node:19

# Set the working directory in the container
WORKDIR /personal-website

COPY  package.json /personal-website

# Install application dependencies
RUN npm install --legacy-peer-deps --save

# Copy package.json and package-lock.json to the container
COPY . /personal-website


# Copy the rest of the application code to the container
COPY . .

# Expose the port on which your application will run
EXPOSE 3000

# Command to start your Node.js application
CMD ["npm", "start"]
