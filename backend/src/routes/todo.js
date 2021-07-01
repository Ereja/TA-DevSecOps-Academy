const { Router } = require("express");
const { addTodo, getTodoById } = require("../dataStore");
const { isObject, isBodyEmpty, isValidTitle } = require("../../utils/utils");
const TodoRoute = Router({ mergeParams: true });

TodoRoute.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!Number.isInteger(+id)) {
    res.status(400).send("ID must be an integer");
  } else if (!getTodoById(id)) {
    res.status(404).send("There is no ToDo list with such ID");
  } else {
    res.status(200).send(getTodoById(id));
  }
});

TodoRoute.post("/", function (req, res) {
  // TODO: Validate the request body
  const { title } = req.body;

  if (!isObject(req.body) || isBodyEmpty(req.body) || !isValidTitle(title)) {
    res.status(400).send("You must enter a title to add a 'ToDo' task.");
  } else {
    const newToDo = {
      title,
      // .toISOString() added to keep same date format, as in already existing todo
      created: new Date().toISOString(),
    };
    addTodo(newToDo);
    res.status(201).json({
      message: `A new Todo task "${newToDo.title}" has been succesfully added.`,
      newToDo,
    });
  }
});

module.exports = TodoRoute;
