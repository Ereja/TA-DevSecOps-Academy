const { Router } = require("express");
const { addTodo, getTodoById } = require("../dataStore");
const { isObject, isBodyEmpty, isValid } = require("../../utils/utils");
const TodoRoute = Router({ mergeParams: true });

TodoRoute.get("/:id", (req, res) => {
  const { id } = req.params;

  return res.send(getTodoById(id));
});

TodoRoute.post("/", function (req, res) {
  // TODO: Validate the request body
  const { title } = req.body;

  if (!isObject(req.body) || isBodyEmpty(req.body) || !isValid(title)) {
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
      added_task_details: newToDo,
    });
  }
});

module.exports = TodoRoute;
