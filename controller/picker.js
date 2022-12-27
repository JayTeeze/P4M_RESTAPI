const picker = require('../db_apis/picker');

function get(req, res, next) {
    let choice = picker.select();
    res.status(200).json(choice);
}

module.exports.get = get;