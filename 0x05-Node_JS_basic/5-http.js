// Create a more complex HTTP server using Node's HTTP module
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
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
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(output.trim());
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
