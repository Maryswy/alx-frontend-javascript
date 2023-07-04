// Defines a function named getListStudentIds
export default function getListStudentIds(students) {
  // Checks if the argument is an array before using the map method
  if (Array.isArray(students)) {
    // Maps over the students array and extracts the 'id' property from each object
    return students.map((items) => items.id);
  }
  // If the argument is not an array, returns an empty array
  return [];
}

