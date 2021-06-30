//utilities are used here considering possible updates, utilities should be reusable in code

//checking for object (but testing on postman, posting anything will be an object)
function isObject(value) {
  return typeof value === "object" && value.constructor === Object;
}

//making sure that users won`t submit empty todo`s
function isBodyEmpty(value) {
  if (Object.keys(value).length === 0) return true;
}

//making sure that value exist
function isValid(title) {
  if (title) return true;
}

module.exports = {
  isObject,
  isBodyEmpty,
  isValid,
};
