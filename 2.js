'use strict'
var bench = require('./bench');

var zipzap = function(n) {
    var i,
        result = '',
        values = ['zipzap', , , 'zip', , 'zap', 'zip', , , 'zip', 'zap', , 'zip', , ,];

    for (i = 1; i <= n; i++) {
        result += values[i % 15] || i
    };
    return result;
}



console.log('zipzap(80) => ', zipzap(80))