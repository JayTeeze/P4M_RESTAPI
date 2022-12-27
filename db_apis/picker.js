const choices = require('../db_apis/choices').data;

function select() {
    return choices[Math.floor(Math.random() * choices.length)];
}

module.exports.select = select;