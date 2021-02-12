/*
 * note that there are two modules and a corresponding test file for each
 * within each test you will have test for +, -, & each type of exception
 * remember to double check what you're testing, you should have a small number of test for each method but throughly test the method
 * 
 * Within each test we use the Arrange (setup), Act (execute), Assert (compare)
 */ 

const Todo = require('../todo');

describe('Todo', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'new' keyword", () => {
      // Arrange
      const text = 'Pick up milk';

      // Act
      const obj = new Todo(text);

      // Assert
      expect(obj.text).toEqual(text);
    });

    // Exception test
    it("should throw an error if not provided a 'text' value", () => {
      // Arrange
      const cb = () => new Todo();
      const err = new Error(
        "Expected parameter 'text' to be a non empty string"
      );

      // Assert
      expect(cb).toThrowError(err);
    });
  });
});
