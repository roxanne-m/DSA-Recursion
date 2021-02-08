/*
 Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. 
That number should be the number of sheep you have. The function should display the number along with the message
 "Another sheep jumps over the fence" until no more sheep are left. 
 */

const countdownSheep = function (sheep) {
  // Base Case
  if (sheep === 0) {
    const phrase = 'All sheep jumped over the fence.';
    console.log(phrase);
  } else {
    // General Case
    const phrase = 'Another sheep jumps over the fence';
    console.log(sheep + ': ' + phrase);
    countdownSheep(sheep - 1);
  }
};

const numOfSheep = 3;
countdownSheep(numOfSheep);