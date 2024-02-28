#!/usr/bin/node
const dict = require('./101-data.js').dict;
const myDict = {
	1:[],
	2:[],
	3:[]
};
for (const key in dict) {
    const value = myDict[key];
    myDict[value].push(key);
}
