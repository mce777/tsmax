// quick review of some ES6 Stuff

// nice, simple block scope example
let var1 = 'look here, the global scope';

function egvar() {
	// var1 is only available in this block
	let var1 = 'here the local scope';
	console.log(var1);
}

egvar(); // here the local scope
console.log(var1); // here the global scope

// default parameters & function setup
const countdown = (start: number = 5): void => {
	while(start > 0) {
		start--;
		console.log(start);
	}
	console.log("Done", start);
};
countdown();

// Rest & Spread
const nums = [1, 10, 99, -5];

// 'spreads' out above array and turns it into a list of numbers
console.log(Math.max(...nums));

// rest operator. When you don't know the # of args in advance
// turns list into array
function makeArray(...args: number[]) {
	return args;
}
console.log(makeArray(1,21));

// Destructuring
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = { userName: "Max", age: 27 };
const { userName, age } = userData;
console.log(userName, age);

// Template Literals
const myName = "Max";
const greeting = `my name is ${myName}`;
console.log(greeting);
