/* 
Write a recursive function that finds the factorial 
of a given number. The factorial of a number can be 
found by multiplying that number by each number 
between itself and 1. For example, the 
factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
*/

function factorial(num) {
  // Base Case
  // If num is 1, then return 1 because factorial of 1 is 1
  if (num === 1) {
    return num;
  }
  // Recursion Case
  // num * previous factorial
  // Example: factorial(5) = 5 * 4 * 3 * 2 * 1, but also could be written as: factorial(5): (5 * factorial(4))
  else {
    return num * factorial(num - 1);
  }
}

factorial(5);
