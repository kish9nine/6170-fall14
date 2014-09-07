//console.log("Hello, world!");

// 1. takes in a numeric value x, and returns x+1.
var inc = function(x){
	return x+1;
}

console.log("inc(should return 2): " + inc(1));

// 2. takes in no arguments, returns a number that starts from
//    one and is incremented by one every time the function is called.
var counter = (function counterMaker(){
	var count = 0;
	return function counter(){
		count++;
		return count;
	}
})();

console.log("counter (should return 1): "+ counter());
console.log("counter (should return 2): "+ counter());
console.log("counter (should return 3): "+ counter());

// 3. takes no arguments, return
var Inc = function(){
	return function(arg){
		return arg + 1;
	}
}

var testInc = Inc();
console.log("Inc (should return 3):" + testInc(2));
console.log("Inc (should be false):" + (Inc()===inc()));

// 4. takes no arguments, returns an function that operates like counter.
var Counter = function(){
	var c = 0
	return function(){
		return ++c;
	};
}

var counter2 = Counter();
console.log("Counter:" + counter2());
console.log("Counter:" + counter2());
console.log("Counter:" + counter2());
console.log("Counter (should be false):" + (Counter() === counter()));

// 5. takes in a number z, returns a function
var CounterFrom = function(z){
	counterLocal = Counter();
	return function(){
		return z + counterLocal();
	}
}

var counterFromSeven = CounterFrom(7);

console.log("CounterFrom (should return 8):" + counterFromSeven());
console.log("CounterFrom (should return 9):" + counterFromSeven());
console.log("CounterFrom (should return 10):" + counterFromSeven());

// 6. takes in n and v, returns an array of length v whose content in each cell of the array is v.
var makeArray = function(n, v){
	var a = new Array();
	for (var i = 0; i<n; i++){
		a[i] = v;
	}
	return a;
}

console.log("makeArray: " + makeArray(5,1).toString());

// 7. takes in two numbers n and v, returns an array.
function UserException(name, message){
	this.message = message;
	this.name = name;
}

var carefulMakeArray = function(n, v){
	if (isNaN(n)){
		throw new UserException("BadSize", "Size is not a number");
	}

	if (n >= 0){
		return makeArray(n, v);
	}else{
		throw new UserException("BadSize", "Negative Size");
	}
}

console.log("carefulMakeArray: (working case)" + carefulMakeArray(5,6).toString());
//console.log("carefulMakeArray: (neg size)" + carefulMakeArray(-5,6));
//console.log("carefulMakeArray: (nan size)" + carefulMakeArray("bee",6));

// 8. 
var incArray = function(n){
	if (isNaN(n)){
		throw new UserException("BadSize", "Size is not a number");
	}

	if (n >= 0){
		return makeArray(n, Inc());
	}else{
		throw new UserException("BadSize", "Negative Size");
	}
}

// 9. 
var counterFromArray= function(n){
	if (isNaN(n)){
		throw new UserException("BadSize", "Size is not a number");
	}

	if (n >= 0){
		var a = new Array();
		for (var i=0;i<n;i++){
			a[i] = CounterFrom(i);
		}
		return a;
	}else{
		throw new UserException("BadSize", "Negative Size");
	}
}