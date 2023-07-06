// Define the interface for a Student
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
const studentsList: Array<Student> = [student1, student2];

// Get the body element from the HTML document
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

// Create a table element
const table: HTMLTableElement = document.createElement("table");

// Create table sections for the table
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Create a row for the table header
const rowHead: HTMLTableRowElement = thead.insertRow(0);

// Create cells for the table header
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

// Set the content of the table header cells
cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";

// Append the table header to the table
table.append(thead);

// Iterate over each student in the studentsList array
studentsList.forEach((student) => {
  // Create a row for each student
  const row: HTMLTableRowElement = tbody.insertRow(0);

  // Create cells for the first name and location
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  // Set the content of the cells using student data
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

// Append the table body to the table
table.append(tbody);

// Append the table to the body element of the document
body.append(table);
