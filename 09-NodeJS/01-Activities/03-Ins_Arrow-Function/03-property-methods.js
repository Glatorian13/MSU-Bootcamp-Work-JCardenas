// Avoid using arrow functions for object methods
// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window

var dog = {
  name: "Lassie",
  sound: "Woof!",
  makeSound: () => console.log(this.sound),
  readTag: () => console.log("The dog's tag reads: " + this.name + ".")
};

// Prints `undefined`
dog.makeSound();

// Prints `The dog's tag reads: undefined.`
dog.readTag();

// In the makeSound and readTag methods above, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file)
// If this code was run in the browser, `this` would refer to the window

// The way to make the functionality work as expected is to use a normal function.
var dog = {
  name: "Lassie",
  sound: "Woof!",
  makeSound: function () {
    console.log("\n\n\n---------"); // \n\n\n adds 3 new lines in the console output (I'm just using it to format the text)
    console.log(this.sound)
  },
  readTag: function () {
    console.log("The dog's tag reads: " + this.name + ".")
  }
};

// Prints Woof
dog.makeSound();

// Prints Lassie
dog.readTag();