import * as myMath from "./myMath"; // import whole module's exports
import MyClass from "./defaultExportClass"; // import default class
import myFunc from "./defaultExportFunc"; // import default function
import "./onlyForExecution"; // only execute the module

console.log("---------------------------Running Main");

// Set up default object vars
let testObj : MyClass = new MyClass();
testObj.id = 111;
testObj.name = "AAA";

myFunc(testObj);

let m1 : myMath.MyMathClass = new myMath.MyMathClass();
let m2 : myMath.MyMathClass2 = new myMath.MyMathClass2();

// Do some fake business
console.log("Add 1 + 1: " + myMath.add(1, 1));
console.log("Subtract 1 - 1: " + myMath.subtract(1, 1));

let multiplyBy5 : (x : number) => number = myMath.curryMultiply(5);
console.log("MultiplyBy5(5): " + multiplyBy5(5));

// Start express and set up controller mappings
// Do Other things

console.log("---------------------------Ended Main");