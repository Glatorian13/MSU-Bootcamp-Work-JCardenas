// Promise example using a real-life promise
// The real-life promise in this scenario is a child asking his parents for a Nintendo Switch

const choresDone = true;

// Promise
const willGetSwitch = new Promise((resolve, reject) => {
  // Check for a desireable outcome, if so resolve the promise
  if (choresDone) {
    const reward = {
      name: 'Nintendo Switch',
      desired: true,
    };
    resolve(reward);

    // Otherwise reject the promise
  } else {
    const issue = new Error('Child did not finish chores as promised');
    reject(issue);
  }
});

// Another promise to call only if we get the reward
const playGames = (reward) => {
  const message = `I am playing games on my new ${reward.name}`;
  
  //to see a failure in this method, uncomment this line
  // return Promise.reject("it failed");

  return Promise.resolve(message);
};

//call the willGetSwitch function, 
willGetSwitch  // if it completes then call the play games function passing in the returned value from the willGetSwitch
  .then(playGames)  // when that's done, call the next function in the .then sequence 
  .then((playGamesReturnValue) => console.log(playGamesReturnValue))  // this is the next function; we've created the function inline
  .catch((err) => console.error(err));  // if there's an error triggered in any of the preceeding functions then the error will be called and subsequent functions will not be executed
