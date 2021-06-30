const { Router } = require("express");

const FizzBuzzRouter = Router({ mergeParams: true });

//TODO: implement '/:number' route to reply according to fizzbuzz rules
FizzBuzzRouter.post("/:number", (req, res) => {
  //getting a number from URL
  const { number } = req.params;

  //by default req.params will return a string, we try to convert that string to a number, if it fails - user will get error message, if it passes(for example - five will fail, 5 - will pass), they can play the fizzbuzz
  if (!Number(+number)) {
    res.status(400).send("To play FizzBuzz you must enter an integer");
  } else {
    let answer = "";
    if (number % 3 === 0) answer += "Fizz";
    if (number % 5 === 0) answer += "Buzz";

    res.status(200).send(answer ? answer : number);
  }
});

module.exports = FizzBuzzRouter;
