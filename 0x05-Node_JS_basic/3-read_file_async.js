// Reading a file asynchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        if (lines.length <= 1) {
          resolve({ totalStudents: 0 });
          return;
        }
        lines.shift();
        const students = {};
        let totalStudents = 0;
        lines.forEach((line) => {
          const [firstname, , , field] = line.split(',');
          if (firstname && field) {
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstname);
            totalStudents += 1;
          }
        });
        console.log(`Number of students: ${totalStudents}`);
        for (const field in students) {
          if (Object.prototype.hasOwnProperty.call(students, field)) {
            const count = students[field].length;
            const list = students[field].join(', ');
            console.log(`Number of students in ${field}: ${count}. List: ${list}`);
          }
        }
        resolve({ totalStudents, students });
      }
    });
  });
}
module.exports = countStudents;
