const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("it should reverse the string", () => {
      let algo = new Algo();
      let str = "Hello World!";
      let strReverse = "!dlroW olleH"
      let result = algo.reverse(str);
      
      expect(result).toEqual(strReverse);
    })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("it should verify its a palindrome", () => {
      //init the Algo obj
      const algo = new Algo();
      //create a string to test 
      const str = "racecar";
      //create var for expected results
      const expectedResult = true; 
      //evaluate if the string is a palindrome
      expect(algo.isPalindrome(str)).toEqual(expectedResult)
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
});
