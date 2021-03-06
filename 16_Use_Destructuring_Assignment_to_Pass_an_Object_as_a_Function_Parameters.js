// Use destructuring assignment within the argument to the function half to send only max and min inside the function.

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };
// const half = (function() {
//   "use strict"; // do not change this line

//   // change code below this line
//   return function half(stats) {
//     // use function argument destructuring
//     return (stats.max + stats.min) / 2.0;
//   };
//   // change code above this line

// })();
// console.log(stats); // should be object
// console.log(half(stats)); // should be 28.015
// ================================================================================

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half ({min, max}) {
    return (min + max) / 2;
  }
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015