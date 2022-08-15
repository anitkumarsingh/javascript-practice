/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

// sub-problems
// How to write degree C
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForeCast = arr => {
  let str = '...';
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + `\u00B0 C in ${i + 1} ${i != 0 ? 'days' : 'day'} ...`;
  }
  console.log(str);
};
printForeCast(temp1);
printForeCast(temp2);
