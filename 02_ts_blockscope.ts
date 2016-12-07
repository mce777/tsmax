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