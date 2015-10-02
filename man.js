var number = 1.5;
var string = 'this is a sting';
var bool = true;

var array = [];
var object = {};
var fn = function () { }
function myfn() {}


var nullVar = null;
var undefinedVar = undefined;


console.log(typeof number)
console.log(typeof string)
console.log(typeof bool)

console.log(typeof array)
console.log(typeof object)
console.log(typeof fn)

console.log(typeof nullVar)
console.log(typeof undefinedVar)

console.log('string' == 'string')
console.log({} == {})

var bool = false;

if (bool) {
	console.log('true')
} else {
	console.log('false')
};

for(var i = 0; i < 10; i++) {
	console.log(i)
}

var output = prompt('enter some value');
var output = prompt('enter some value');

// var n = prompt('enter number');
// if (n != 0){
// 	x = prompt('enter number');
// 	var a = [];
// 	a.push(+x);
// 	var min = a[0];
// 	for (var i = 1; i < +n; i++){
// 		x = prompt('enter number');
// 		a.push(+x);
// 		if (a[i] < min) {
// 			min = a[i];
// 		}
// 	}
// 	console.log(min);
// }	