#!/usr/bin/node
const array1 = require('./100-data.js').list

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(array1);
console.log(map1);
