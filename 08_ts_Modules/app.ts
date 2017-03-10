// 'Circle' kind of like a namespace
import * as Circle from "./math/circle";

// only one 'default' export
import calc from "./math/rectangle";

console.log(Circle.PI);
console.log(Circle.calculateCirumcumference(10));
console.log(calc(20, 50));