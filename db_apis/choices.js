const database = require('../service/database');

// find, create, update, delete
let baseQuery = `SELECT * FROM choice`;

async function find(id) {
    let query = baseQuery;
    let binds = [];

    if (id) {
        query += ` WHERE id = ?`;
        binds = [id];
    }

    const result = await database.simpleExecute(query, binds, false);
    return result;
}

module.exports.find = find;

async function create(choice) {
    let query = `INSERT INTO choice (name) VALUES (?)`;
    let binds = [choice.name];

    const result = await database.simpleExecute(query, binds, true);
    return result;
}

module.exports.create = create;

async function update(choice) {
    let query = `UPDATE choice SET name = ? WHERE id = ?`;
    let binds = [choice.name, choice.id];

    const result = await database.simpleExecute(query, binds, true);
    return result;
}

module.exports.update = update;

async function remove(id) {
    let query = `DELETE FROM choice WHERE id = ?`;
    binds = [id];

    const result = await database.simpleExecute(query, binds, true);
    return result;
}

module.exports.remove = remove;