// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Patel",
  lastName: "Helpot",
  age: 23,
  location: "Canada",
};

const student2: Student = {
  firstName: "Swabrinah",
  lastName: "Baraka",
  age: 25,
  location: "Kenya",
};

// Create an array containing the two student objects
const studentsList: Student[] = [student1, student2];

// Get the table element from the HTML document
const table = document.createElement("table");

// Create a table row for each student and append it to the table
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  
  // Create table cells for the first name and location
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  
  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  
  // Append the row to the table
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
