/*
Write a function that reverses a string. 
Take a string as input, reverse the string, and return the new string.
*/

function reverseString(userString, emptyString = '') {
  // Base Case
  if (userString === '') {
    return console.log(emptyString); // if empty string return empty string
  } else {
    // Recursive case
    const firstChar = userString[userString.length - 1]; //store the last char of userString
    const restOfString = userString.slice(0, -1); // slice out the last char of userString

    // push chars into empty string to build off
    emptyString += firstChar;
    reverseString(restOfString, emptyString);
  }
}

reverseString('This is a string');
