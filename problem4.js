/* 
Calculate the nth triangular number. A triangular number counts 
the objects that can form an equilateral triangle. The nth triangular 
number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. This is the 
Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
*/

function triangularNumber(numStars) {
  // Base Case
  // if numStars is less that 2, then return numStars
  if (numStars < 2) {
    return numStars;
  }
  // Recursive Case
  // 2nd = (1+2) = 3
  // 3rd = (1+2+3) = 6
  // 4th = (1+2+3+4) = 10
  // etc
  else {
    return numStars + triangularNumber(numStars - 1);
  }
}
triangularNumber(4);
