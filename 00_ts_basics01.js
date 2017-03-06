// 1. Infererence: TS infers the **number** type.
var myAge = 27;
// 2. tuples
var address = ["superstreet", 99];
// 3. enum (expressive numbers)
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor); // 2
// 4. not returning anything
function sayHello() {
    console.log("hello");
}
// 5. argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3)); // 6
// 6. functions as types
// here is a function that take 2 arguments, both numbers, and returns a number
var myMultiply;
myMultiply = sayHello; // so this is gonna throw an error
myMultiply = multiply; // but this is fine
// 7. objects as types
var userData = {
    name: "Bob",
    age: 27
};
// 8. union types
var myWhateverNumber = 27;
// 9. check types
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("Final value is a string!!");
}
