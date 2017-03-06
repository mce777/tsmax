// 1. Infererence: TS infers the **number** type.
let myAge = 27;

// 2. tuples
let address: [string, number] = ["superstreet", 99];

// 3. enum (expressive numbers)
enum Color {
	Gray,
	Green,
	Blue
}
let myColor: Color = Color.Blue;
console.log(myColor); // 2

// 4. not returning anything
function sayHello(): void{
	console.log("hello");
}

// 5. argument types
function multiply(value1: number, value2: number) {
	return value1 * value2;
}

console.log(multiply(2,3)); // 6

// 6. functions as types
// here is a function that take 2 arguments, both numbers, and returns a number
let myMultiply: (val1: number, val2: number ) => number;

myMultiply = sayHello; // so this is gonna throw an error

myMultiply = multiply; // but this is fine

// 7. objects as types
let userData: { name: string, age: number } = {
	name: "Bob",
	age: 27
};

// 8. union types
let myWhateverNumber: number | string = 27;

// 9. check types
let finalValue = "A string";
if (typeof finalValue == "string") {
	console.log("Final value is a string!!")
}