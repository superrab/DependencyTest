// Example of a default exported function
import MyClass from "./defaultExportClass";

export default function(x : MyClass) {
    console.log("Hello " + x.printMe());
};