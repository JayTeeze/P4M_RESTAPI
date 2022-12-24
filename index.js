require('dotenv').config();
const webServer = require('./service/web-server');

async function startup() {
    console.log('Starting application');
    
    try {
        console.log('Starting web server');
        await webServer.start();
    } catch(err) {
        console.log('Encountered error', err);
    }
}

startup();

async function shutdown() {
    try {
        await webServer.close();
        process.exit(0);
    } catch(err) {
        process.exit(1);
    }
}

process.on('SIGINT', () => {
    console.log('SIGINT received');
    shutdown();
})

process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    shutdown();
})

// const express = require('express');
// const app = express();

// app.use('/', (req, res) => {
//     res.status(200).send('Hello World!');
// })

// app.listen(3000);