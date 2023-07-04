// This function takes two arguments: 'students' (an array) and 'city' (a string).
export default function getStudentsByLocation(students, city) {
  // The code checks if the 'students' argument is an array by comparing its prototype to the Array.prototype.
  if (Object.getPrototypeOf(students) === Array.prototype) {
    // If 'students' is an array, the filter() method is used to create a new array with elements that match the condition.
    // The condition in this case checks if the 'location' property of each student object is equal to the provided 'city' value.
    // The filter() method returns a new array containing only the student objects that satisfy the condition.
    return students.filter((items) => items.location === city);
  }

  // If 'students' is not an array, the code returns an empty array using 'return []'.
  return [];
}
