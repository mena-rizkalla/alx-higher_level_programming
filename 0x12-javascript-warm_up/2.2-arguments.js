#!/usr/bin/node
switch(process.argv.length){
	case 2 :
		console.log("No argument");
		break;
	case 3 :
		console.log("Argument Found");
		break;
	default :
		console.log("arguments Found");
}
