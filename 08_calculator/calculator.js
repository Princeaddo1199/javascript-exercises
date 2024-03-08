const add = function(a, b) {
	return a + b;
};
add(12, 8)

const subtract = function(a, b) {
	return a - b;
};
subtract(18, 8)

const sum = function(array) {
	return array.reduce((totalArray, currentArray) => totalArray + currentArray, 0)
};
sum([2, 5, 3, 6, 9, 12])

const multiply = function(array) {
  return array.reduce((productArray, currentArray) => productArray * currentArray)

};
multiply([2, 5, 3, 6, 9, 12])

const power = function(a, b) {
	return Math.pow(a, b)
};
power(10, 3)

const factorial = function(num) {
	if (num === 0) return 1;
    let product = 1;
    for (let i = num; i > 0; i--){
        product *= i;
    }
    return product
};
factorial(20);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
