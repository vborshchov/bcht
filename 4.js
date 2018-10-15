'use strict'
var bench = require('./bench')

var getWaterAmount = function(arr) {
    var result = 0,
        leftTop = 0,
	    rightTop = 0,
        left = 0,
        right = arr.length - 1;
		
    while(left < right) {
        if(leftTop < arr[left]) {
            leftTop = arr[left];
        }
        if(rightTop < arr[right]) {
            rightTop = arr[right];
        }
        if(leftTop >= rightTop) {
            result += rightTop - arr[right];
            right--;
        } else {
            result += leftTop - arr[left];
            left++;
        }
    }
    return result;
}

// var longArr = [34, 89, 15, 91, 5, 21, 21, 31, 56, 71, 94, 50, 31, 0, 62, 95, 44, 29, 1, 67, 9, 79, 40, 72, 37, 30, 50, 92, 57, 12, 33, 84, 70, 88, 98, 19, 11, 51, 37, 11, 67, 64, 59, 45, 37, 87, 88, 88, 41, 0];
var longArr = []
for(let i = 0; i < 10000; i++) {
    longArr.push(Math.floor(Math.random() * 1000) + 0)
}

bench(getWaterAmount, 10000, [longArr], this)