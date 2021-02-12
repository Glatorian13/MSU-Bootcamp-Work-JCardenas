const fizzBuzz = require('../fizz');

// As a developer I want to create a method that...
// should return the number if not a multiple of three or five
// should return Fizz if multiple of 3
// should return Buzz if multiple of 5
// should return FizzBuzz if a multiple of both 3 and 5

// To make these pass, we're going to write a constructor function and then each senario one at a time
describe('fizzBuzz', () => {
  it('should return the number if not a multiple of three or five', () => {
    expect(fizzBuzz([1])).toBe('1');  // note the use of a string
    expect(fizzBuzz([1, 2])).toBe('1, 2');  // note the use of a string, not an array
  });

  it('should return Fizz if multiple of 3', () => {
    expect(fizzBuzz([3])).toBe('Fizz');
    expect(fizzBuzz([3, 6, 12])).toBe('Fizz, Fizz, Fizz');
  });

  it('should return Buzz if multiple of 5', () => {
    expect(fizzBuzz([10])).toBe('Buzz');
    expect(fizzBuzz([10, 20, 25])).toBe('Buzz, Buzz, Buzz');
  });

  it('should return FizzBuzz if a multiple of both 3 and 5', () => {
    expect(fizzBuzz([15])).toBe('FizzBuzz');
    expect(fizzBuzz([15, 30, 45])).toBe('FizzBuzz, FizzBuzz, FizzBuzz');
  });

});
