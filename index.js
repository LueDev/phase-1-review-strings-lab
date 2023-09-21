// Write your code in this file!
const currentUser = 'Grace Hopper';
console.log(currentUser);

let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
console.log(welcomeMessage);

let excitedWelcomeMessage = "WELCOME TO FLATBOOK, " +currentUser.toUpperCase() + "!";
console.log(excitedWelcomeMessage);

let shortGreeting = "Welcome, " +currentUser.slice(0, 1) + "!";
console.log(shortGreeting);
