
function greeting() {
  return "Hello, welcome!";
}


const userInfo = {
  name: "Ker",
  age: 20
};

// Exports
module.exports = greeting;
module.exports.userInfo = userInfo;

//Laman nong isang file to use the export

// const greeting = require('./15_modules_export');
// const { userInfo } = require('./15_modules_export');

// console.log(greeting());
// console.log(userInfo);