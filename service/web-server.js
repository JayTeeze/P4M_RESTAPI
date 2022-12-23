const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('../router');

let app, httpServer;

function start() {
    return new Promise((resolve, reject) => {
        let port = process.env.PORT;

        app = express();
        httpServer = http.createServer(app);

        app.use(morgan('combined'));

        app.use(bodyParser.json());

        app.use(cors());
    
        // TODO make router module
        app.use('/api', router);
    
        httpServer.listen(port, (err) => {
            if (err) {
                reject(err);
                return;
            }

            console.log(`Web server listening on port: ${port}`);

            resolve();
        });
    })

}

module.exports.start = start;