// Create two student objects
var student1 = {
    firstName: "Patel",
    lastName: "Helpot",
    age: 23,
    location: "Canada",
};
var student2 = {
    firstName: "Swabrinah",
    lastName: "Baraka",
    age: 25,
    location: "Kenya",
};
// Create an array containing the two student objects
var studentsList = [student1, student2];
// Get the body element from the HTML document
var body = document.getElementsByTagName("body")[0];
// Create a table element
var table = document.createElement("table");
// Create table sections for the table
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
// Create a row for the table header
var rowHead = thead.insertRow(0);
// Create cells for the table header
var cell1Head = rowHead.insertCell(0);
var cell2Head = rowHead.insertCell(1);
// Set the content of the table header cells
cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";
// Append the table header to the table
table.append(thead);
// Iterate over each student in the studentsList array
studentsList.forEach(function (student) {
    // Create a row for each student
    var row = tbody.insertRow(0);
    // Create cells for the first name and location
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    // Set the content of the cells using student data
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
// Append the table body to the table
table.append(tbody);
// Append the table to the body element of the document
body.append(table);
