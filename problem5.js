/* 
Write a recursive function that splits a string based 
on a separator (similar to String.prototype.split). 
Don't use JS array's split function to solve this problem.
*/

function stringSplitter(string, separator, result=[]) {
  // Base Case
  // set index to the index where a separator is found
  let index = string.indexOf(separator);
  // if index of separator is not found, push the string to the results array
  if (index === -1) {
      result.push(string);
    return 
  }
  // Recursive Case
  else {
    // slice initial string at index and push to result array
    result.push(string.slice(0, index));
    // set string to start at after the separator (slice after the separator and rest of string)
    string = string.slice(index+1, string.length);
    return stringSplitter(string, separator, result);
  }
}

stringSplitter('02/20/2020', '/');
