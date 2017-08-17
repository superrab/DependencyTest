"use strict";
// Here is an example of multiple named exports defining consts and functions
Object.defineProperty(exports, "__esModule", { value: true });
// Demo of inline exports
var MyMathClass = (function () {
    function MyMathClass() {
    }
    return MyMathClass;
}());
exports.MyMathClass = MyMathClass;
;
var MyMathClass2 = (function () {
    function MyMathClass2() {
    }
    return MyMathClass2;
}());
exports.MyMathClass2 = MyMathClass2;
;
exports.MY_PI = 3.14;
function add(x, y) {
    return x + y;
}
exports.add = add;
;
function subtract(x, y) {
    return x - y;
}
exports.subtract = subtract;
;
// Demo of revealing module export at end
function multiply(x, y) {
    return x * y;
}
exports.multiply = multiply;
;
/**
 * Returns a multiplyByX() function
 */
function curryMultiply(x) {
    return function (y) {
        return multiply(x, y);
    };
}
exports.curryMultiply = curryMultiply;
;
