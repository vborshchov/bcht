'use strict'
var bench = require('./bench')

var getQueenPossiblePoints = function(point) {
    var result = [];

    for (var i = 1; i <= 8; i++) {
        if (i !== point.x && i !== point.y) {
            result.push({x: point.x, y: i})
            result.push({x: i, y: point.y})
            if (point.x - i > 0 && point.y - i > 0) { result.push({x: point.x - i, y: point.y - i});}
            if (point.x - i > 0 && point.y + i < 9) { result.push({x: point.x - i, y: point.y + i});}
            if (point.x + i < 9 && point.y - i > 0) { result.push({x: point.x + i, y: point.y - i});}
            if (point.x + i < 9 && point.y + i < 9) { result.push({x: point.x + i, y: point.y + i});}
        }
    }
    return result;
}

var times = 1000000
var point = {x:5, y:6}

bench(getQueenPossiblePoints, times, [point], this)