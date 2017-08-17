// Example of a default exported class
export default class MyClass {
    public name : string;
    public id : number;

    private aPrivateFunc : () => void = () => {
        console.log(this.name); // shows that in arrow function "this" is bound to enclosing class
    };

    private aSecondPrivateFunc = function() {
        // console.log(this.name); //this gives a compile error because "this" is not the same as MyClass "this"
    };

    public printMe() : string {
        return JSON.stringify(this);
    };
    
};