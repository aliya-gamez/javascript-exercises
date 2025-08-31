const add = function(a,b) {
	return (a+b);
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function(arrArg) {
  let arr = arrArg;
  if(arr===undefined||arr.length==0) {
    return 0;
  }
	return arr.reduce((sum,current) => sum + current);
};

const multiply = function(arrArg) {
  let arr = arrArg;
  if(arr===undefined||arr.length==0) {
    return 0;
  }
  return arr.reduce((sum,current) => sum * current);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  if(a==0) {
    return 1;
  }
  let sum = 1;
	for(let i = 1; i <= a; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
