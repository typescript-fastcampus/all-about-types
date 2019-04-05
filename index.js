"use strict";
// Null
var a = null;
// String
var b = 'Hi Hax0r';
// Object
var c = {};
// Number
var d = 1 || 57 || 286 || 0xadf0d;
// Undefined
var e;
// Boolean
var f = true || false;
// Array
var g = [] || [b];
// Function
var h = function () { };
// Tuple
var i = ['Hax0r', 24];
// Never
var j = function () {
    while (true) {
        console.log(Date.toString());
    }
};
// Enum
var PaymentFlag;
(function (PaymentFlag) {
    PaymentFlag[PaymentFlag["Fail"] = 0] = "Fail";
    PaymentFlag[PaymentFlag["InProgress"] = 1] = "InProgress";
    PaymentFlag[PaymentFlag["Success"] = 2] = "Success";
})(PaymentFlag || (PaymentFlag = {}));
var k = PaymentFlag.Success;
// Void
var l = undefined;
var m = {
    statusCode: 200,
    body: ''
};
(function () {
    return {
        statusCode: 200,
        body: ''
    };
});
// Any
var o = a || b || c || d || e || f || g || h || i;
console.log('o', o);
console.log('hiidf');
