# GymIdea Full Stack Application

## Overview

GymIdea is a full-stack application built using Node.js, Express, MongoDB, and Webpack. It allows users to post and delete gym ideas.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **MongoDB**: A NoSQL database for data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Webpack**: Module bundler for front-end assets.
- **Nodemon**: Utility to automatically restart the server during development.
- **dotenv**: Module to load environment variables from a `.env` file.
- **MiniCssExtractPlugin**: Webpack plugin to extract CSS into separate files.
- **HtmlWebpackPlugin**: Simplifies the creation of an HTML file to include bundled assets.

## Project Structure

The project is structured as follows:

- **`models`**: Contains MongoDB schema models.
- **`config`**: Configuration files, including database connection setup.
- **`routes`**: Defines the application routes.
- **`public`**: Static assets like stylesheets and client-side JavaScript.
- **`views`**: HTML templates.
- **`webpack.config.js`**: Configuration file for Webpack.
- **`.env`**: Environment variables configuration.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/username/gymIdea.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory with the following content:

    ```
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/gymIdea
    ```

    Adjust the values as needed.

4. Run the application:

    ```bash
    npm start
    ```
Front-end
The application will be accessible at `http://localhost:3000`.

Back-end 
The application will be accessible at `http://localhost:8000`.

## Usage

1. Open a web browser and navigate to `http://localhost:3000`.
2. Users can post and delete gym ideas.
3. Explore the features of the application.



