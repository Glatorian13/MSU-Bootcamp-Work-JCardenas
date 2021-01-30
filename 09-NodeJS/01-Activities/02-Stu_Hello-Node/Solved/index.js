// console.log(window);
// prompt("hello");
// alert("howdy");
// confirm("hola?");

console.log("Hellooo, Node!");


// https://nodejs.org/api/readline.html
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your string ', (answer) => {
  
  console.log(`Thank you for entering ${answer}`);

  rl.close();
});