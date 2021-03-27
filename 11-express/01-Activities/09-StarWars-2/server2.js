// Dependencies
const express = require('express');

const app = express();
const PORT = 3000;

// Data
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Knight',
    age: 60,
    forcePoints: 1350,
  },
];

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

//chosen automatically binds the url part to the req.{name}
app.get('/:chosen', (req, res) => {
  const chosen = req.params.chosen;

  // What does this log?
  console.log(chosen);

  res.end();
});

// if you wanted to have two params you could do this.  (also see exercies 4 for a more realistic example)
app.get('/:param1/:param2', (req, res) => {
  const chosen = req.params.param1;
  const chosen2 = req.params.param2;

  // What does this log?
  console.log(chosen);
  console.log(chosen2);

  res.end();
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
