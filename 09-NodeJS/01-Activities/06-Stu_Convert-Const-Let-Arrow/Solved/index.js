/**
 * Key decisions to think about when determining when to use var, let, and const
 * 
 * should it be a let?
 * 1. always start with the assumption of yes! this will keep scope local which is a good thing. 
 *    see https://dmitripavlutin.com/javascript-scope/ for various levels of what local scope means. 
 * 2. If you can find a reason that actually requires var it's likely a legacy arcitecture that should be updated.  
 *    For example, someone wrote code modifying the same variables in multiple files :(
 * 
 * should it be const? If you answer no to all of these then it should likely be a const 
 * 1. will the reference need to change?  
 * 2. will the variable type need to change?
 * 3. will this be a non-primative variable such as an array or object that should change references? 
 * 
 * here's another post that explains more about this using terms like hoisting and TDZ, it's not likely you'll run into these issues. https://blog.pragmatists.com/let-your-javascript-variables-be-constant-1633e56a948d
 * 
 * Should you use const on a function?  well that depends - #1 does it meet the criteria above (hint: it should).  #2 it's a personal preference...
 * here's an old school (get off my lawn) type answer about using const to define functions.
 *   This article is how i feel too - I don't do it but you can if you want.  Just stick to a method and be consistent. 
 *   https://www.freecodecamp.org/news/constant-confusion-why-i-still-use-javascript-function-statements-984ece0b72fd/
 */

/* 
 * Now that we're armed with rules, lets go through why we would change things. 
 */ 

// the html element with the id root will not change (ie it's got an id - #root and no other element in the DOM should have the same id)
const $root = document.querySelector("#root");

// these are variables that will change values over time, const would not allow us to change the values so we use let
let score;
let targetScore;

// this is a function that does not need to be changed and thus can be const.  We're going to be consistent and use constants for every function throughout.
const makeGuess = () => {
  // because we're using querySelector, we will only ever get back the first instance of a p within the element with #root
  //    depending on the design of the app functionality it may make sense to keep this as a const or possibly a let.  
  //    because we're not changing the value later in the function, we can set it as a const.  
  //    The only objection to using const could have to do with garbage collection however most applications do not need to worry about garbage collection issues.
  const $score = document.querySelector("#root p");
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;

  //note that you cannot call makeGuess before the function playRound is defined; that's a sacrafice we're making by using const on all functions
  if (score > targetScore) {
    alert("You lost this round!");
    playRound();  
  } else if (score === targetScore) {
    alert("You won this round!");
    playRound();
  }
};

// We're going to be consistant (and constant :) here.  We use a capital C to represent that this function will behave like an object that has methods
//   google prototyping if you want to know more, this is generally considered  bad code these days so i'm going to ignore it. 
//   We'll learn the right way soon enough
const Crystal = function(color) {
  this.element = document.createElement("div");
  this.element.className = "crystal " + color;
  this.value = 0;

  this.element.addEventListener(
    "click",
    () => {
      score += this.value;
      makeGuess();
    },
    false
  );
};

// this is adding a method render to the object Crystal
//  this is also considered bad code these days and you'll learn a better way to do it soon
Crystal.prototype.render = function(target) {
  this.value = Math.floor(Math.random() * 15) + 1;
  target.appendChild(this.element);
};

// using constant here to indicate that the reference will never change even though we can add and delete anything inside the array.
//  this really is an unnecessary use of constant here but it is still valid. 
const crystals = [
  new Crystal("red"),
  new Crystal("blue"),
  new Crystal("green")
];

// We're going to be consistant (and constant :) here. 
const playRound = () => {
  // we're only creating one of these variables and they will not change so we can use const here
  const fragment = document.createDocumentFragment();
  const $score = document.createElement("p");
  targetScore = Math.floor(Math.random() * 50) + 25;
  score = 0;
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;
  crystals
    .sort(() => 0.5 - Math.random())
    .forEach(crystal => crystal.render(fragment));
  fragment.appendChild($score);
  $root.innerHTML = "";
  $root.appendChild(fragment);
};

playRound();

/**
 *  Now that you've made it all the way through that, it's important to know that const has been around for a very long time
 *  Const is used in all pre-compiled languages in a slightly different way than we've used it here and it's general speaking more useful in classes and structs
 *  For this script, my personal recommendation would be to use let for the variables; function for the functions; and maybe use a const for the root but it's not necessary
 * 
 *  When you have defined values like numbers, strings, etc. that shouls not ever be modified, that's a good reason to use const.  You'll see this when we make classes
 * 
 *  Take these articles one of which is 20 years old talking about C/C++ (which is where the popularity of const stems from)
 *    http://duramecho.com/ComputerInformation/WhyHowCppConst.html
 *    https://www.cprogramming.com/tutorial/const_correctness.html
 */