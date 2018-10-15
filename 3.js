'use strict'
var bench = require('./bench')

var isInCircle = function(r, x, y) {
    // if one of the coordinates more or equals radius of circle then return false
    let xDistance = Math.abs(x);
    if (xDistance >= r) return false;
    // checking only one point's coordinate one by one is better for performance
    let yDistance = Math.abs(y);
    if (yDistance >= r) return false;
    // if sum of coordinates less then radius of a circle then return true (diamond inside circle)
    if (xDistance + yDistance < r) return true;
    // use Pythagorean theorem
    return Math.sqrt(x*x + y*y) < r
}

function calculate() {
    isInCircle(1, 2, 4)
    isInCircle(5, 2, 4)
    isInCircle(1.25, 0.88, 0.88)
    isInCircle(1.25, 0.89, 0.88)
}

console.log('isInCircle(1, 2, 4) =>', isInCircle(1, 2, 4))
console.log('isInCircle(5, 2, 4) =>', isInCircle(5, 2, 4))
console.log('isInCircle(1.25, 0.88, 0.88) =>', isInCircle(1.25, 0.88, 0.88))
console.log('isInCircle(1.25, 0.89, 0.88) =>', isInCircle(1.25, 0.89, 0.88))

bench(calculate, 1000000, [], this)