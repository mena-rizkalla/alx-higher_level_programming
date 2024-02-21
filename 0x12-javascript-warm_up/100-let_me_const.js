#!/usr/bin/node
myVar = 89;
module.exports = () => {
 myVar = 333;
};
module.exports();
console.log(myVar);
