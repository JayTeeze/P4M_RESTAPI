const database = require('../service/database');

async function select() {
    let query = `SELECT * FROM choice ORDER BY RANDOM() LIMIT 1`;
    let binds = [];

    const result = await database.simpleExecute(query, binds, false);
    return result;
}

module.exports.select = select;