# 0x05-Node_JS_Basics

This repository contains a set of tasks aimed at practicing various aspects of Node.js. Each task focuses on a specific concept and builds upon the previous ones. Below is a guide to understanding and completing each task.

## Task 0: Executing basic JavaScript with Node.js

**File:** `0-console.js`

In this task, you need to create a function `displayMessage` that takes a string as an argument and prints it to the standard output (STDOUT).

Example usage:
```javascript
const displayMessage = require('./0-console');
displayMessage("Hello NodeJS!");
```

Output:
```
Hello NodeJS!
```

## Task 1: Using Process stdin

**File:** `1-stdin.js`

Create a program that interacts with the user through the command line. It should ask for the user's name and display it back. Additionally, when the program ends, it should display a closing message.

Example usage:
```bash
$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
```

## Task 2: Reading a file synchronously with Node.js

**File:** `2-read_file.js`

Create a function `countStudents` that reads a CSV file named `database.csv`. The function should log the number of students in each field along with their names.

Example usage:
```javascript
const countStudents = require('./2-read_file');

countStudents("database.csv");
```

Output:
```
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```

## Task 3: Reading a file asynchronously with Node.js

**File:** `3-read_file_async.js`

Similar to Task 2, but this time, implement the `countStudents` function asynchronously using Promises.

## Task 4: Create a small HTTP server using Node's HTTP module

**File:** `4-http.js`

Create a basic HTTP server using Node's built-in `http` module. The server should listen on port 1245 and respond with the message "Hello Holberton School!" for any endpoint.

## Task 5: Create a more complex HTTP server using Node's HTTP module

**File:** `5-http.js`

Enhance the HTTP server from Task 4. Now, depending on the endpoint, the server should respond with different messages. For the root endpoint ("/"), it should return "Hello Holberton School!", and for the "/students" endpoint, it should display the same content as in Task 3.

## Task 6: Create a small HTTP server using Express

**File:** `6-http_express.js`

Install the Express framework and create a simple HTTP server using Express. The server should respond with "Hello Holberton School!" for the root endpoint ("/").

## Task 7: Create a more complex HTTP server using Express

**File:** `7-http_express.js`

Expand on Task 6 by responding differently based on the endpoint. For the root ("/") endpoint, display a welcome message, and for the "/students" endpoint, display the student information as shown in Task 3.

## Task 8: Organize a complex HTTP server using Express

**Folder:** `full_server`

In this task, you'll organize the HTTP server code into separate directories and files to improve code maintainability. Follow the structure described in the task details.

