const express = require('express');
const cors = require('cors');

const { PORT } = require('./src/server-config');
const Server = require('./src/server');

const setupAndRunServer = () =>{
    const app = express();

    app.use(cors());

    app.get('/restaurants', Server.getRestaurants);
    app.get('/restaurants/menu', Server.getRestaurantMenu);

    app.listen(PORT, ()=>{
        console.log(`Server started runing at Port number: ${PORT}`);
    })
};

setupAndRunServer();