// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it belongs to a special "Timeout" object


//WHAT IS CONTEXT???
// $.on("click",function(event){
//   var elemThatWasClicked = $(this); // the context of this function is the element that was clicked aka THIS
// }

// How do I pass context into setTimeout function?

var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(function() {
      console.log(this.name + "!");
    }, 100);
  }
};

person.saySomething(); // prints "Hodor is thinking..."
// prints "undefined!" 100ms later

// Arrow functions bind the `this` keyword to the object it's created inside of
// i.e. whatever `this` is where it's created
var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(() => console.log(this.name + "!"), 100);  // NOTE THE ARROW FUNCTION
  }
};

person.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later
