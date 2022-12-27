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
function find(id) {
    if (id) {
        let result = data.find(element => element.id === id);
        return result ? result : {};
    } else {
        return data;
    }
}

module.exports.find = find;

function create(choice) {
    choice.id = data[data.length - 1].id + 1;
    data.push(choice);
    return choice;
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