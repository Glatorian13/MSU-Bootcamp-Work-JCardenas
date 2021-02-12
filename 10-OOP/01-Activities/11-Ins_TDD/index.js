const Arithmetic = require('./arithmetic');

// this is called daisy chaining.  Anyone have an idea of how we can code out the functionality to do this?

const value = new Arithmetic(4) // returns a new Arithmetic with value of 4
  .plus(8) // returns a new Arithmetic with value of 12
  .plus(15) // returns a new Arithmetic with value of 27
  .minus(16) // returns a new Arithmetic with value of 11
  .minus(23) // returns a new Arithmetic with value of -12
  .plus(42) // returns a new Arithmetic with value of 30
  .plus(108) // returns a new Arithmetic with value of 138
  .value();  // returns the value of the last Arithmetic

console.log(value);
