// Use class keyword and write a proper constructor to create the Vegetable class.

// The Vegetable lets you create a vegetable object, with a property name, to be passed to 

// function makeClass() {
//   "use strict";
//   /* Alter code below this line */

//   /* Alter code above this line */
//   return Vegetable;
// }
// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // => should be 'carrot'constructor
// =======================================================================

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor (name) {
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'