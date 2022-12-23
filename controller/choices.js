// Simulated DB
let choices = [
    {id: 1, name: 'Taco Bell'},
    {id: 2, name: 'McDonalds'},
    {id: 3, name: 'Olive Garden'},
    {id: 4, name: 'Longhorn Steakhouse'},
    {id: 5, name: 'Red Robin'},
    {id: 6, name: 'Subway'},
    {id: 7, name: 'Cook food'}];

function get(req, res, next) {
    if (choices.length > 0) {
        res.status(200).json(choices);
    } else {
        res.status(404);
    }
}

module.exports.get = get;