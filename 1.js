'use strict'

// utils functions
var ValidateInput = function (num) {
    const ALLOWED_SYMBOLS = '0123456789ABCDEF'
    var arr = String(num).split('');
    return {
        base : function (base) {
            var regex = new RegExp('^[' + ALLOWED_SYMBOLS.substr(0, base) + ']$', 'ig');
            for (var i = 0; i < arr.length; i++) {
                if (i === 0 && !arr[i].match(/^[+-]$/) && !arr[i].match(regex)) {
                    throw new Error("unexpected char in input number: " + arr[i] + " at position " + i);
                } else if (!arr[i].match(regex)) {
                    throw new Error("unexpected char in input number: " + arr[i] + " at position " + i);
                }
            }
        }
    };
};

function b2h(b) {
    if (b.length < 4)
        b = "0".repeat(4-b.length)+b
    switch (b) {
        case '0000': return '0';
        case '0001': return '1';
        case '0010': return '2';
        case '0011': return '3';
        case '0100': return '4';
        case '0101': return '5';
        case '0110': return '6';
        case '0111': return '7';
        case '1000': return '8';
        case '1001': return '9';
        case '1010': return 'a';
        case '1011': return 'b';
        case '1100': return 'c';
        case '1101': return 'd';
        case '1110': return 'e';
        case '1111': return 'f';
    }
}

function h2b(b) {
    switch (b) {
        case '0': return '0000';
        case '1': return '0001';
        case '2': return '0010';
        case '3': return '0011';
        case '4': return '0100';
        case '5': return '0101';
        case '6': return '0110';
        case '7': return '0111';
        case '8': return '1000';
        case '9': return '1001';
        case 'a': return '1010';
        case 'b': return '1011';
        case 'c': return '1100';
        case 'd': return '1101';
        case 'e': return '1110';
        case 'f': return '1111';
        case 'A': return '1010';
        case 'B': return '1011';
        case 'C': return '1100';
        case 'D': return '1101';
        case 'E': return '1110';
        case 'F': return '1111';
    }
}

var baseConverter = function(decNumber, base) {
    var int = parseInt(decNumber)
    var digits = "0123456789abcdef";
    var res = []
    while (int > 0) {
        let remainder = int % base
        res.unshift(digits[remainder])
        int = Math.floor(int / base);
    }
    return res.join('')
}




// required functions

function decToHex(n) {
    ValidateInput(n).base(10);
    return baseConverter(n, 16)
}

function decToBin(n) {
    ValidateInput(n).base(10);
    return baseConverter(n, 2)
}

function hexToBin(hex) {
    ValidateInput(hex).base(16);
    var charArr = [],
        numstr;

    for(var i=0; i< hex.length; i++){
        charArr.push(h2b(hex[i]));
    }
    numstr = charArr.join('')
    if (/^0*$/.test(numstr)) {
        numstr = '0'
    } else {
        numstr = numstr.replace(/^0+/, '')
    }
    return numstr;
}

function binToHex(n) {
    ValidateInput(n).base(2);
    var result = []
    var numstr = String(n)
    if (numstr.length > 1) {
        numstr = numstr.replace(/^0+/, '')
    }
    var iterations = Math.ceil(numstr.length/4);
    // add leading zeroes for substr with negative first argument in loop
    numstr = '0000' + numstr
    // loop through each 4 chars
    for (let i = 1, pos = 4; i <= iterations; i++, pos += 4){
        let dig = numstr.substr(-pos, 4)
        b2h(dig)
        result.unshift(b2h(dig))
    }
    return result.join('');
}

console.log("decToHex('1986438') => ", decToHex('1986438'))
console.log("decToBin('1986438') => ", decToBin('1986438'))
console.log("hexToBin(decToHex('1986438')) => ", hexToBin(decToHex('1986438')))
console.log("binToHex(decToBin('1986438')) => ", binToHex(decToBin('1986438')))

console.log("binToHex(hexToBin('1e4f86')) => ", binToHex(hexToBin('1e4f86')))

console.log("decToHex('12') => ", decToHex('12'))
console.log("hexToBin('7F') => ", hexToBin('7F'))
console.log("hexToBin('000') => ", hexToBin('000'))