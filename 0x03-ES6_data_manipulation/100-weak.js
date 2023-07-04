// Creates a new WeakMap object called 'weakMap'.
export const weakMap = new WeakMap();

// Defines a function called 'queryAPI' that takes an 'endpoint' as an argument.
export function queryAPI(endpoint) {
  // Checks if the 'endpoint' key is not present in the 'weakMap'.
  if (!weakMap.has(endpoint)) {
    // If the 'endpoint' key is not present, it sets the 'endpoint' key in the 'weakMap' with an initial value of 0.
    weakMap.set(endpoint, 0);
  }

  // Retrieves the current value associated with the 'endpoint' key from the 'weakMap' and increments it by 1.
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  // Checks if the value associated with the 'endpoint' key in the 'weakMap' is equal to or exceeds 5.
  if (weakMap.get(endpoint) >= 5) {
    // If the value is equal to or exceeds 5, an error is thrown indicating that the load on the 'endpoint' is high.
    throw Error('Endpoint load is high');
  }
}
