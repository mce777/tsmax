// quick review of some ES6 Stuff
// nice, simple block scope example
var var1 = 'look here, the global scope';
function egvar() {
    // var1 is only available in this block
    var var1 = 'here the local scope';
    console.log(var1);
}
egvar(); // here the local scope
console.log(var1); // here the global scope
// default parameters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
        console.log(start);
    }
    console.log("Done", start);
};
countdown();
