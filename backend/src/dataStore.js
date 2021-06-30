// We're not setting up a database for this test, but this file "emulates" one.
// You can ignore this file for the technical test
const DATA = {
    todos: [
        {
            title: 'Something',
            created : (new Date(Date.now() - (7*24*60*60*1000))).toISOString() // Created a week ago
        }
    ]
};


function getTodoById(id) {
    if(!Number.isInteger(id)) {
        throw new TypeError('Id must be integer');
    }

    return DATA.todos[id] ? JSON.parse(JSON.stringify(DATA.todos[id])): null;
}

function addTodo(data) {
    DATA.todos.push(data);
}

module.exports = {
    getTodoById,
    addTodo
};
