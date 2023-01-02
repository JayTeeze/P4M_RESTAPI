const choices = require('../db_apis/choices');

async function get(req, res, next) {
    try {
        let id = req.params.id && parseInt(req.params.id);
        const result = await choices.find(id);
    
        if (id && result.length === 1) {
            res.status(200).json(result[0]);
        } else if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

module.exports.get = get;

function getChoiceFromReq(req) {
    let choice = {
        id: Number(),
        name: req.body.name
    }
    return choice;
}

async function post(req, res, next) {
    try {
        if (req.body.name) {
            let choice = getChoiceFromReq(req);
            const result = await choices.create(choice);
    
            if (result.changes !== 0) {
                choice.id = result.lastID;
                res.status(201).json(choice);
    
            } else {
                res.sendStatus(500);
            }
        } else {
            res.status(400).send('Bad Request');
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}

module.exports.post = post;

async function put(req, res, next) {
    try {
        if (req.params.id && req.body.name) {
            let choice = getChoiceFromReq(req);
            choice.id = parseInt(req.params.id);
            
            const result = await choices.update(choice);
    
            if (result.changes !== 0) {
                res.status(200).json(choice);
            } else {
                res.sendStatus(404);
            }
        } else {
            res.status(400).send('Bad Request');
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}

module.exports.put = put;

async function del(req, res, next) {
    try {
        if (req.params.id) {
            let id = parseInt(req.params.id);
            const result = await choices.remove(id);
    
            if (result.changes !== 0) {
                res.status(200).send('Item Deleted');
            } else {
                res.sendStatus(404);
            }
        } else {
            res.status(400).send('Bad Request');
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}

module.exports.del = del;