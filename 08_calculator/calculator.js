const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(nums) {
  // let sum = 0;
  // for (let num of nums) {
  //   sum += num;
  // }
  // return sum; 

  // or 
  return nums.reduce((total, current) => total + current, 0)
};

const multiply = function(nums) {
  // let result = 1;
  // for (let num of nums) {
  //   result *= num;
  // }
  // return result; 

  // or 
  return nums.reduce((total, current) => total * current, 1)
};


const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(num) {
  let result = 1;
  while (num !== 0){
    result *= num; 
    num--;
  }
  return result; 
	
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
