#!/usr/bin/node
myVar = 89;
module.exports = () => {
  myVar = 333;
};
console.log(myVar);
