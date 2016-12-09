// kind of like an elaborate custom type
// Max called it a 'contract'
interface IName {
	firstName: string;
	age?: number;  // the ? makes it optional
	[propName: string]: any;
	greet2(lastName: string): void;
}

function greet(person: IName) {
	console.log("Hello, " + person.firstName);
}

function changeName(person: IName) {
	person.firstName = "Anna";
}

const person: IName = {
	firstName: "Max",
	age: 27,
	hobbies: ["Cooking", "Sports"], // refers to the [propName] above
	greet2(lastName: string) {
		console.log("Hi, I am " + this.firstName + " " + lastName);
	}
};

// greet({firstName: "Max", age: 27});
changeName(person);
greet(person);
person.greet2("Anything");

// can also do it with a class
class Person implements IName {
	firstName: string;
	lastName: string;
	greet2(lastName: string) {
		console.log("Hi, I am " + this.firstName + " " + lastName);
	}
}

const mePerson = new Person();
mePerson.firstName = "Maximilian";
mePerson.lastName = "Anything";
greet(mePerson);
mePerson.greet2(mePerson.lastName);

// function types

interface DoubleValueFunc {
	(number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
	return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10,20));

// interface inheritance

interface AgedPerson extends IName {
	age: number;
}

const oldPerson: AgedPerson = {
	age: 27,
	firstName: "Max",
	greet2(lastName: string) {
		console.log("hello there")
	}
};

console.log(oldPerson);






