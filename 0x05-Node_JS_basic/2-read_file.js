// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file content by lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check if the file is empty (no valid data)
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Remove the header row
    lines.shift();

    // Initialize variables to hold the count and student lists
    const students = {};
    let totalStudents = 0;

    // Process each line
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

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and the list of their first names
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const count = students[field].length;
        const list = students[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
