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
    role: 'Jedi Master',
    age: 55,
    forcePoints: 1350,
  },
];

// Routes

app.get('/', (req, res) => res.send('Welcome to the Star Wars Page!'));

// Displays all characters
app.get('/api/characters', (req, res) => res.json(characters));

// Displays a single character, or shows "No character found"
app.get('/api/characters/:character', (req, res) => {
  // Grab the selected parameter
  const chosen = req.params.character;
  console.log(chosen);

  // Check each character routeName and see if the same as "chosen"
  for (let i = 0; i < characters.length; i++) {
    // If the statement is true, send the character back as JSON,
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // otherwise send back "false"
  // why are we sending through json instead of res.send("false") ?? Hint: if has to do with a response header
  return res.send(false);
});

app.get('/api/characters/:character/nickname/:nickname', (req, res) => {
  // What does this code do?
  const chosen = req.params.character;
  console.log(chosen);

  // What does this code do?
  for (let i = 0; i < characters.length; i++) {
    const currentChar = characters[i];
    if (chosen === currentChar.routeName) {
      currentChar.nickname = req.params.nickname;
      return res.json(currentChar);
    }
  }

  // What does this code do?
  return res.send('No character found');
});

// Listener

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
