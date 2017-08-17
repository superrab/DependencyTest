// Here is an example of multiple named exports defining consts and functions

// Demo of inline exports
export class MyMathClass {
    public aNumber : number;
};

export class MyMathClass2 {
    public firstNumber : number;
    public secondNumber : number;
};

export const MY_PI : number = 3.14;

export function add(x : number, y : number) : number {
    return x + y;
};

export function subtract(x : number, y : number) : number {
    return x - y;
};

// Demo of revealing module export at end
function multiply(x : number, y : number) : number {
    return x * y;
};

/**
 * Returns a multiplyByX() function
 */
function curryMultiply(x : number) : (z : number) => number {
    return function(y : number) : number {
        return multiply(x, y);
    };
};

export {multiply, curryMultiply};