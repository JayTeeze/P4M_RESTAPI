require('dotenv').config();
const webServer = require('./service/web-server');
const database = require('./service/database');

async function startup() {
    console.log('Starting application');
    
    try {
        console.log('Starting web server..');
        await webServer.start();
    } catch(err) {
        console.log('Encountered error', err);
    }

    try {
        console.log('Connecting to database..');
        await database.openConnection();

    } catch(err) {
        console.log('Encountered error', err);
    }
}

startup();

async function shutdown() {
    console.log('Shutting down');

    try {
        console.log('Closing web server..');
        await webServer.close();

        console.log('Closing database connection..');
        await database.closeConnection();

        console.log('Exiting process');
        process.exit(0);

    } catch(err) {
        console.log('Exiting process', err);
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