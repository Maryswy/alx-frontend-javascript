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

