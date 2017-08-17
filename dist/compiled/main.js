"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myMath = require("./myMath"); // import whole module's exports
var defaultExportClass_1 = require("./defaultExportClass"); // import default class
var defaultExportFunc_1 = require("./defaultExportFunc"); // import default function
require("./onlyForExecution"); // only execute the module
console.log("---------------------------Running Main");
// Set up default object vars
var testObj = new defaultExportClass_1.default();
testObj.id = 111;
testObj.name = "AAA";
defaultExportFunc_1.default(testObj);
var m1 = new myMath.MyMathClass();
var m2 = new myMath.MyMathClass2();
// Do some fake business
console.log("Add 1 + 1: " + myMath.add(1, 1));
console.log("Subtract 1 - 1: " + myMath.subtract(1, 1));
var multiplyBy5 = myMath.curryMultiply(5);
console.log("MultiplyBy5(5): " + multiplyBy5(5));
// Start express and set up controller mappings
// Do Other things
console.log("---------------------------Ended Main");
