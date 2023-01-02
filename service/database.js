const sqlite = require('sqlite3').verbose();

// Make accessible to other modules
let db;

function openConnection() {
    return new Promise((resolve, reject) => {
        db = new sqlite.Database("p4m.db", sqlite.OPEN_READWRITE, (err) => {
            reject(err);
            return;
        });

        console.log('Connected to database');
        resolve();
    })
}

module.exports.openConnection = openConnection;

function closeConnection() {
    return new Promise((resolve, reject) => {
        db.close((err) => {
            reject(err);
            return;
        })

        console.log('Database connection closed');
        resolve();
    })
}

module.exports.closeConnection = closeConnection;

function simpleExecute(sql, binds = [], isDML) {
    return new Promise((resolve, reject)  => {
        if (isDML) {
            db.run(sql, binds, function (err){
                if (err) {
                    console.log('Encountered error', err);
                    reject(err);
                }
                resolve(this);
            });
        } else {
            db.all(sql, binds, function (err, rows){
                if (err) {
                    console.log('Encountered error', err);
                    reject(err);
                }
                resolve(rows);
            });
        }

    })
}

module.exports.simpleExecute = simpleExecute;