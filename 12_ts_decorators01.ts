// decorators are just functions
// decorators are a ts feature (an experimental one)
// this example here is printing the constructor fn of the class
function logged(constructorFn: Function) {
	console.log(constructorFn);
}

@logged  //this attaches it to the class
class Person {
	constructor() {
		console.log("Hi");
	}
}

// Factory
function logging(value: boolean) {
	return value ? logged : null;
}

@logging(true)
class Car {

}

// Advanced
function printable(constructorFn: Function) {
	constructorFn.prototype.print = function() {
		console.log(this);
	}
}

// can have multiple decorators
@logging(true)
@printable
class Plant {
	name = "Green Plant";
}
const plant = new Plant();
(<any>plant).print();

// Method Decorator
function editable(value: boolean) {
	return function(target: any, propName: string, descriptor: PropertyDescriptor) {
		descriptor.writable = value;
	}
}

class Project {
	projectName: string;

	constructor(name: string) {
		this.projectName = name;
	}

	// here through the decorator we are making calcBudget() uneditable
	// so changing it below will not work
	@editable(false)
	calcBudget() {
		console.log(1000);
	}
}

const project = new Project("super duper project");
project.calcBudget();
project.calcBudget = function() {
	console.log(7777);
};
project.calcBudget();

// property and parameter decorators don't seem extremely useful
