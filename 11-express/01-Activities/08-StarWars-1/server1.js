// Dependencies
const express = require('express');  // old way: http = require('http')

const app = express();  // this initializes express and returns the express instance which we call an application/app.  when we use http it was returning a new instance automatically so you don't have to initialize
const PORT = 3000;  // we used 8080 (and some other last class).  express typically uses 3000; we can use anything though

// Data
const yoda = {
  name: 'Yoda',
  role: 'Jedi Master',
  age: 900,
  forcePoints: 2000,
};

const darthmaul = {
  name: 'Darth Maul',
  role: 'Sith Lord',
  age: 200,
  forcePoints: 1200,
};

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
/** 
 * last class we used switch statement to render content.  this is the same concept:
 * .get means that the method used was a GET method and then the first param is the path
 * 
 * so it would be like this in the past 
 * if (req.url === XXX AND req.method === "GET") render this content
 * 
 * also note the similarity to how it looks with the handleRequest functions we've written? 
 * This is perform two functions:
 * 1. It is defining the method and route
 * 2. it is assigning the function to be executed when the method/route combination occurs
 *
 * Together, these form the same functionality we previously used in http.createServer(handleRequest);
 */
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/yoda', (req, res) => {
  res.json(yoda);
});

app.get('/darthmaul', (req, res) => {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));  // old method was server.listen(port, function)

