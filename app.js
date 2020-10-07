const add = require('./add');
const mult = require('./mult');
const stat = require('./stat');
const result = add(1, 2);
const result2 = mult(2,3);
console.log(result);
console.log(result2);
console.log(stat.pi);
console.log(stat.mean([1,2,3,4,5]));