'use strict'

var getQueenPossiblePoints = function(point) {
    var result = [];
    for (var i = 1;  i <= 8; i++) {
        for (var j = 1; j <=8 ;j++) {
            if((i !== point.x || j !== point.y) && (( i === point.x || j === point.y) || (Math.abs(i-point.x) === Math.abs(j-point.y)))) {
                result.push({x: i, y: j})
            }
        }
    }
    return result;
}

console.log(getQueenPossiblePoints({x: 1, y: 1}))