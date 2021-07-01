// We're not setting up a database for this test, but this file "emulates" one.
// You can ignore this file for the technical test
const DATA = {
  todos: [
    {
      title: "Something",
      created: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // Created a week ago
    },
  ],
};

function getTodoById(id) {
  // if nothing is found, returns false - as such item doesn`t exist
  return DATA.todos[id] ? JSON.parse(JSON.stringify(DATA.todos[id])) : false;
}

function addTodo(data) {
  DATA.todos.push(data);
}

module.exports = {
  getTodoById,
  addTodo,
};
