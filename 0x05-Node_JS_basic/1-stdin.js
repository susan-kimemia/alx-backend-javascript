/* file path: 1-stdin.js

const readline = require('readline');

creating an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

creating the function
function askName() {
  console.log('Welcome to Holberton School, what is your name?');

  wait to get the user input
  rl.question('', (name) => {
    console.log(`Your name is: ${name}`);

    if (process.stdin.isTTY) {
     For interactive terminal, do not automatically close
      rl.prompt();
    } else {
      For piped input, close the readline interface
      rl.close();
    }
  });
}

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});

askName();
*/
process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
