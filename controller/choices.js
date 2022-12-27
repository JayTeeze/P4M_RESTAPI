const choices = require('../db_apis/choices');

// refactor for new choices api module
function get(req, res, next) {
    let id = req.params.id && parseInt(req.params.id);
    let result = choices.find(id);
    res.status(200).json(result);
}

module.exports.get = get;

function post(req, res, next) {
    if (req.body.name) {
        let choice = {
            name: req.body.name
        }
        choice = choices.create(choice);
        res.status(201).json(choice);
    } else {
        res.status(400).send('Bad Request');
    }
}

module.exports.post = post;

function put(req, res, next) {
    if (req.params.id) {
        let choice = {
            id: parseInt(req.params.id),
            name: req.body.name
        }
        
        choice = choices.update(choice);

        if (choice) {
            res.status(200).json(choice);
        } else {
            res.sendStatus(404);
        }
    } else {
        res.status(400).send('Bad Request');
    }
}

module.exports.put = put;

function del(req, res, next) {
    if (req.params.id) {
        let id = parseInt(req.params.id);
        let result = choices.remove(id);

        if (result) {
            res.status(200).json(result);
        } else {
            res.sendStatus(404);
        }
    }
}

module.exports.del = del;