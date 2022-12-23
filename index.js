require('dotenv').config();
const webServer = require('./service/web-server');

async function startup() {
    console.log('Starting application');
    
    try {
        await webServer.start();
    } catch(err) {
        console.log('Encountered error', err);
    }
}

startup();

// const express = require('express');
// const app = express();

// app.use('/', (req, res) => {
//     res.status(200).send('Hello World!');
// })

// app.listen(3000);