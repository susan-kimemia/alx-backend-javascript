const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = './database.csv'; // assume database.csv is in the same directory
  countStudents(path)
    .then((result) => {
      let output = `This is the list of our students\nNumber of students: ${result.totalStudents}\n`;
      for (const field in result.students) {
        if (Object.prototype.hasOwnProperty.call(result.students, field)) {
          const count = result.students[field].length;
          const list = result.students[field].join(', ');
          output += `Number of students in ${field}: ${count}. List: ${list}\n`;
        }
      }
      res.send(output.trim());
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
