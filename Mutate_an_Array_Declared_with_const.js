// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.
// =================================================
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  let a = s.sort();
  return a;

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();