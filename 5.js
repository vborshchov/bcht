var rs = require('jsrsasign');
var rsu = require('jsrsasign-util');
var prvPEM = rsu.readFile('./file.pem');
var prvKey = rs.KEYUTIL.getKey(prvPEM);
// console.log(prvKey);

var message =  "Думи мої, думи мої, Лихо мені з вами! Нащо стали на папері Сумними рядами?.. Чом вас вітер не розвіяв В степу, як пилину? Чом вас лихо не приспало, Як свою дитину?.."


var createSign = function(privateKey, data) {
    var sig = new rs.Signature({alg: 'SHA1withRSA'});
    sig.init(privateKey);
    sig.updateString(data);
    var sigVal = sig.sign();
    return sigVal;
}

var sign = createSign(prvKey, message)
console.log(sign)