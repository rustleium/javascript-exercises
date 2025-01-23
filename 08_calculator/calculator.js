const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, ele) => {
    return sum + ele;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function() {
	
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
