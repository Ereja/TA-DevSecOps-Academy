# Dev Assignment

The test involves looking at 2 small example codebases and performing some basic tasks.

## Tasks:

### Frontend:
- [ ] Add testing for the `Card Search` component
- [ ] Improve the styling of the `Card` and `Card Search` component
  - It's up to you what "looks good", I'd just like to see how you implement a look.
- [ ] Identify and Clean up errors you notice with the current implementation

### Backend:
- [ ] Implement the FizzBuzz route: 
   - When given a number, it responds by either repeating the number, or the phrase, as determined by the rules of https://en.wikipedia.org/wiki/Fizz_buzz
- [ ] Add data validation to `POST /todo/` such that it meets the following JSON schema requirements:
```json
{
    "type": "object",
    "properties": {
        "title": { "type": "string" },
        "created": { "type": "string", "format": "date-time" }
    },
    "additionalProperties:": false
}
```
- [ ] Think about how you might test the above work (You do not have to implement this)
- [ ] Create tests for some of the codebase
  - Mocha/chai has already been installed and will run any `*.spec.js` test files.
- [ ] Make the code adhere to our eslint config: https://www.npmjs.com/package/@devsecopsacademy/eslint-config
- [ ] Feel free to point out any issues or inconsistencies you see.
