// another es6 quick review
var numbers = [1, 99, 10, 3];
// the spread operator ...
// 'spreads' out the array into a list of numbers
// without the ..., the following wouldn't work
console.log(Math.max.apply(Math, numbers));
