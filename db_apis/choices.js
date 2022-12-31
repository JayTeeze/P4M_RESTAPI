const database = require('../service/database');

// Simulated DB
let data = [
    {id: 1, name: 'Taco Bell'},
    {id: 2, name: 'McDonalds'},
    {id: 3, name: 'Olive Garden'},
    {id: 4, name: 'Longhorn Steakhouse'},
    {id: 5, name: 'Red Robin'},
    {id: 6, name: 'Subway'},
    {id: 7, name: 'Cook food'}];

module.exports.data = data;

// find, create, update, delete
let baseQuery = `SELECT * FROM choice`;

async function find(id) {
    let query = baseQuery;
    let binds = [];

    if (id) {
        query += ` WHERE id = ?`;
        binds = [id];
    }

    const result = await database.simpleExecute(query, binds);
    
    return result;
}

module.exports.find = find;

let createQuery = `INSERT INTO choice (name) VALUES (?)`;

async function create(choice) {
    let query = createQuery;
    let binds = [choice.name];

    const result = await database.simpleExecute(query, binds);
    return result;
}

module.exports.create = create;

function update(choice) {
    let index = data.findIndex(x => x.id === choice.id);
    if (index !== -1) {
        data[index].name = choice.name;
        return data[index];
    }
}

module.exports.update = update;

function remove(id) {
    let index = data.findIndex(x => x.id === id);
    if (index !== -1) {
        let result = data.splice(index, 1);
        return result[0];
    }
}

module.exports.remove = remove;