// Array.prototype.forEach()
const myArray = [2, 4, 6, 8];

myArray.forEach((num) => console.log(num));

// String.prototype.toLowerCase()
const person = {
  name: 'Eric',
  age: 28,
  occupation: 'Full-Stack Web Developer',
};

console.log(person.occupation.toLowerCase());

// Prototype methods on constructor function
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
}

const superman = new Movie('Superman', 1978);

Movie.prototype.logInfo = function () {
  console.log(`${this.title} was released in ${this.releaseYear}\n`);
};

superman.logInfo();

// why would we overload? 
console.log(superman.toString());

Movie.prototype.toString = function movieToString() { return `${this.title} was released in ${this.releaseYear}`};
console.log(superman.toString());


//If time allows, i should cove this as a bonus.  if we don't get to it, look it up - mostly this is a legacy operation
// // has own property = false, logInfo was inherited
// console.log(`Is logInfo a property of the instance or constructor? 
//   ${superman.hasOwnProperty('logInfo') ? 'instance' : 'constructor'}\n\n`);

// superman.fly = function () {
//   console.log("I'm flying");
// }

// // has own property = true, fly is defined directly on the object and is not inherited
// console.log(`Is fly a property of the instance or constructor? 
//   ${superman.hasOwnProperty('fly') ? 'instance' : 'constructor'}\n\n`);

// // list out all the keys that belong to this instance; use case is dynamically adding data
// for(let key in superman){
//   if(superman.hasOwnProperty(key)){
//     console.log(`${key}  belongs to the instance of the movie`);
//     console.log(`\t${key} is a ${typeof(superman[key])} with value ${superman[key]} \n`)
//   }
// }

// // console.log(`\n\n`);
// // superman.name = 'clark kent';

// // for(let key in superman){
// //   console.log(`${key} belongs to the movie constructor and can have a value set in the instance`);
// // }