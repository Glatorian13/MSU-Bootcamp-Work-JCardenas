// describe starts with the module then each function we want to test
describe("Arithmetic", () => {
    describe("Initialization", () => {
    ...
    });
    describe("plus", () => {
    ...
    });
    describe("minus", () => {
    ...
    });
    describe("value", () => {
      ...
    });
  });


  describe("Initialization", () => {
    // It is a function that takes in a string that describes what is being tested and how to test it.
    // In the example below, we're defining what the initialization should do.  
    // There can be an unlimited number of test on each describe but generally it's kept pretty small to keep code clean
    //  and limit a function to a single activity
    it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
      const obj = new Arithmetic();

      expect("number" in obj).toEqual(true);
    });