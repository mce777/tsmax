// simple, not so great generic
function echo(data: any) {
	return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

// a better generic
// the data we get will be of type T
function betterEcho<T>(data: T) {
	return data;
}

console.log(betterEcho("Max")); // here, we get 'length' suggested
console.log(betterEcho(27)); // here, 'length' will show up red AND results in compile error
console.log(betterEcho({name: "Max", age: 27}));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
// testResults.push("random string"); // see, won't work

// Arrays
function printAll<T>(args: T[]) {
	args.forEach((element) => console.log(element));
}
printAll<string>(["apple", "banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));

// Generic Class
class SimpleMath<T extends number | string> {
	baseValue: T;
	multiplyValue: T;
	calculate(): number {
		// + sign casts the Values to number
		return +this.baseValue * +this.multiplyValue;
	}
}
const simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());









