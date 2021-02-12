// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
const PORT0 = 7000;
const PORT1 = 7500;

// Create a generic function to handle requests and responses
const handleRequest0 = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  response.end(`It Works!! Path Hit0: ${request.url}`);
};

const handleRequest1 = (request, response) => {
  // Send the below string to the client when the user visits the PORT URL
  response.end(`It Works!! Path Hit 1: ${request.url}`);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server0 = http.createServer(handleRequest0);

// Start our server so that it can begin listening to client requests.
server0.listen(PORT0, () => {
  // Log (server-side) when our server has started
  console.log(`Quote 1: http://localhost:${PORT0}`);
});

const server1 = http.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, () => {
  // Log (server-side) when our server has started
  console.log(`Quote 2: http://localhost:${PORT1}`);
});

