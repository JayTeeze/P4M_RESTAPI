const picker = require('../db_apis/picker');

async function get(req, res, next) {
    try {
        const result = await picker.select();

        if (result.length > 0) {
            res.status(200).json(result[0]);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

module.exports.get = get;