"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example of a default exported class
var MyClass = (function () {
    function MyClass() {
        var _this = this;
        this.aPrivateFunc = function () {
            console.log(_this.name); // shows that in arrow function "this" is bound to enclosing class
        };
        this.aSecondPrivateFunc = function () {
            // console.log(this.name); //this gives a compile error because "this" is not the same as MyClass "this"
        };
    }
    MyClass.prototype.printMe = function () {
        return JSON.stringify(this);
    };
    ;
    return MyClass;
}());
exports.default = MyClass;
;
