# Project 

in this project we learn about basic backend and frontend

# backend

    npm init 
 this is to initialize the backend which creates package.json file.

    npm i 
install the required dependencies which are listed in the package.json file

    npm i express 
install the express js which is used for simplifies the process of creating server-side logic and handling http requests and response 

ROUTING 
    
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
    res.send('Hello, World!');
    });

    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

Routing: Express allows you to define routes to handle different HTTP methods (GET, POST, etc.) and URL patterns. This makes it easy to organize and structure your application.

MIDDLEWARE : Express uses middleware functions to process incoming requests. Middleware functions have access to the request and response objects and can perform various tasks, such as authentication, logging, or modifying the request/response.
   
    app.use((req, res, next) => {
    console.log('Middleware function');
    next(); // Call the next middleware in the stack
    });
    

# dotenv
    npm install dotenv

    add this in your server file
    
    import 'dotenv/config'
Create a file named .env in the root of your project.
Add your configuration variables in the format PORT=VALUE

to add import you need to add this in your package.json  "type": "module",

you can add port like this in your code
     
     const port = process.env.PORT 

# FRONTEND

in fronted we used vite 
    
    npm i vite@latest 

add axios for http request in js 
    
