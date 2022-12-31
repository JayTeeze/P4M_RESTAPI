const choices = require('../db_apis/choices');

async function get(req, res, next) {
    let id = req.params.id && parseInt(req.params.id);
    let result = await choices.find(id);

    if (id && result.length === 1) {
        res.status(200).json(result[0]);
    } else if (result.length > 0) {
        res.status(200).json(result);
    } else {
        res.sendStatus(404);
    }
}

module.exports.get = get;

function getChoiceFromReq(req) {
    let choice = {
        name: req.body.name
    }
    return choice;
}

async function post(req, res, next) {

    if (req.body.name) {
        let choice = getChoiceFromReq(req);
        choice = await choices.create(choice);

        res.status(201).json(choice);
    } else {
        res.status(400).send('Bad Request');
    }
}

module.exports.post = post;

async function put(req, res, next) {
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