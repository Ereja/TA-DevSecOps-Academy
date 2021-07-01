const { Router } = require("express");

const FizzBuzzRouter = Router({ mergeParams: true });

//TODO: implement '/:number' route to reply according to fizzbuzz rules
FizzBuzzRouter.post("/:number", (req, res) => {
  //getting a number from URL
  const { number } = req.params;

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
