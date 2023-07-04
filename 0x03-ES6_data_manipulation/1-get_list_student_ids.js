// This function takes an array 'arr' as input and returns an array containing the IDs of students from the input array.
function getListStudentIds(arr) {
  // First, the code checks if the input 'arr' is not an array using the Array.isArray() method.
  if (!Array.isArray(arr)) {
    // If 'arr' is not an array, it returns an empty array using 'return []'.
    return [];
  }

  // If 'arr' is an array, the map() method is used to iterate over each element in the array.
  // The map() method transforms each element in the array to its corresponding 'id' property (assuming each element is an object with an 'id' property).
  // The arrow function 'student => student.id' is used to extract the 'id' property of each student object in the 'arr' array.
  // The map() method returns a new array containing only the 'id' properties of the student objects.

  return arr.map(student => student.id);
}

// Exporting the function to be used in other parts of the application.
export default getListStudentIds;
