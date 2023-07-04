// This function takes one argument: 'groceries' (a Map object).
export default function updateUniqueItems(groceries) {
  // Checks if the prototype of 'groceries' is not equal to Map.prototype.
  if (Object.getPrototypeOf(groceries) !== Map.prototype) {
    // If 'groceries' is not an instance of the Map class, it throws a TypeError.
    throw TypeError('Cannot process');
  }

  // Iterates over each key-value pair in the 'groceries' Map using the forEach() method.
  groceries.forEach((val, key) => {
    // Checks if the value (val) is equal to 1.
    if (val === 1) {
      // If the value is 1, it updates the value to 100 for the corresponding key in the 'groceries' Map using the set() method.
      groceries.set(key, 100);
    }
  });

  // Returns the modified 'groceries' Map.
  return groceries;
}
