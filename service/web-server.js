const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

let app, httpServer;

function start() {
    return new Promise((resolve, reject) => {
        let port = process.env.PORT;

        app = express();
        httpServer = http.createServer(app);

        app.use(morgan('combined'));

        app.use(bodyParser.json());

        app.use(cors());
    
        app.use('/api', router);
    
        // httpServer.listen(port, (err) => {
        //     if (err) {
        //         reject(err);
        //         return;
        //     }

        //     console.log(`Web server listening on port: ${port}`);

        //     resolve();
        // });

        httpServer.listen(port).on('listening', () => {
            console.log(`Web server listening on port: ${port}`);
            resolve();
        }).on('error', (err) => {
            reject(err);
        })
    })

}

module.exports.start = start;

function close() {
    return new Promise((resolve, reject) => {
        console.log('Closing web server');
        httpServer.close().on('error', (err) => {
            reject(err);
            return;
        });
        console.log('Web server closed');
        resolve();

    })
}

module.exports.close = close;