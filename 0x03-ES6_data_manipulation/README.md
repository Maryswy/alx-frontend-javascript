0x03. ES6 data manipulation
JavaScript
ES6

ES6, also known as ECMAScript 2015, introduced several new features and improvements to JavaScript, including enhanced data manipulation capabilities. Here are some key ES6 features related to data manipulation:



RESOURCES
Read or watch:

Array
Typed Array
Set Data Structure
Map Data Structure
WeakMap



Learning Objectives
How to use map, filter and reduce on arrays
Typed arrays
The Set, Map, and Weak link data structures



Array
Arrays in ES6 come with several methods and features that enhance data manipulation. Here are some common techniques for working with arrays in ES6:

Array Destructuring: Destructuring allows you to extract values from an array and assign them to variables in a convenient way. For example:

javascript code
const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;
console.log(a);      // 1
console.log(b);      // 2
console.log(rest);   // [3, 4, 5]
Array.prototype.map(): The map() method creates a new array by applying a provided function to each element of the original array. It returns a transformed array with the same length. For example:

javascript code
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);  // [1, 4, 9, 16, 25]
Array.prototype.filter(): The filter() method creates a new array containing elements from the original array that satisfy a specified condition. It returns an array with the filtered values. For example:

javascript code
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]
Array.prototype.reduce(): The reduce() method applies a function against an accumulator and each element of the array (from left to right) to reduce it to a single value. It is useful for operations like summing or aggregating array elements. For example:

javascript code
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // 15
Array.prototype.find() and Array.prototype.findIndex(): These methods were mentioned earlier. They are used to find the first element that matches a condition and return either the element itself or its index, respectively.

Spread Operator: The spread operator (...) can be used for array manipulation, such as creating a copy of an array, merging multiple arrays, or passing an array as individual arguments to a function. For example:

javascript code
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);  // [1, 2, 3, 4, 5, 6]
These are just a few examples of how to use arrays for data manipulation in ES6. The array methods and features introduced in ES6 provide powerful tools for transforming, filtering, and reducing arrays in a concise and expressive manner.




Typed Array
Typed Arrays in ES6 provide a way to work with binary data and perform low-level data manipulation. Here's an overview of how to use Typed Arrays for data manipulation in ES6:

Creating Typed Arrays: Typed Arrays are created using constructors such as Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, etc. You can create a Typed Array from an existing array or directly from a buffer. For example:

javascript code
const buffer = new ArrayBuffer(16);  // Create a buffer of 16 bytes
const int32Array = new Int32Array(buffer);  // Create a Typed Array of 4 elements (4 bytes each)
Accessing and Modifying Elements: Typed Arrays provide indexed access to their elements similar to regular arrays. You can read and modify individual elements using the array-like bracket notation. For example:

javascript code
const intArray = new Int32Array([1, 2, 3, 4]);
console.log(intArray[0]);  // 1
intArray[1] = 10;
console.log(intArray);     // Int32Array [1, 10, 3, 4]
Iterating through Typed Arrays: You can iterate through Typed Arrays using loops like for or forEach method. For example:

javascript code
const floatArray = new Float32Array([1.1, 2.2, 3.3, 4.4]);
for (let i = 0; i < floatArray.length; i++) {
  console.log(floatArray[i]);
}
// Output:
// 1.1
// 2.2
// 3.3
// 4.4
Array-Like Methods: Typed Arrays have methods similar to regular arrays, such as map(), filter(), reduce(), etc., which can be used for data manipulation. For example:

javascript code
const intArray = new Int32Array([1, 2, 3, 4]);
const squaredArray = intArray.map(num => num * num);
console.log(squaredArray);  // Int32Array [1, 4, 9, 16]
Subarray Extraction: You can extract a subarray from a Typed Array using the subarray() method. It creates a new Typed Array referencing a portion of the original array. For example:

javascript code
const intArray = new Int32Array([1, 2, 3, 4]);
const subArray = intArray.subarray(1, 3);
console.log(subArray);  // Int32Array [2, 3]
Conversion to Regular Arrays: You can convert a Typed Array to a regular array using Array.from() or the spread operator (...). For example:

javascript code
const intArray = new Int32Array([1, 2, 3, 4]);
const regularArray = Array.from(intArray);
console.log(regularArray);  // [1, 2, 3, 4]
Typed Arrays provide efficient memory storage and operations for manipulating binary data, making them suitable for scenarios where low-level data manipulation is required.





Set Data Structure
The Set data structure introduced in ES6 provides a collection of unique values and offers several methods for data manipulation. Here's an overview of how to use the Set data structure for data manipulation in ES6:

Creating a Set: You can create an empty Set or initialize it with an iterable (such as an array) containing values. For example:

javascript code
const set = new Set();
const setWithValues = new Set([1, 2, 3]);
Adding and Removing Elements: The Set provides methods for adding and removing elements. You can use add() to add a new unique value to the Set, and delete() to remove an element. For example:

javascript code
const set = new Set();
set.add(1);
set.add(2);
set.delete(1);
Checking Element Existence: You can check if an element exists in a Set using the has() method, which returns a boolean indicating whether the value is present or not. For example:

javascript code
const set = new Set([1, 2, 3]);
console.log(set.has(2));  // true
console.log(set.has(4));  // false
Iterating through a Set: Sets maintain the insertion order of elements and provide methods to iterate through them. You can use forEach() or the for...of loop to iterate over the elements in a Set. For example:

javascript code
const set = new Set([1, 2, 3]);
set.forEach(value => {
  console.log(value);
});
// Output:
// 1
// 2
// 3

for (const value of set) {
  console.log(value);
}
// Output:
// 1
// 2
// 3
Size and Clearing: The Set has a size property that returns the number of elements in the Set. To clear all elements from a Set, you can use the clear() method. For example:

javascript code
const set = new Set([1, 2, 3]);
console.log(set.size);  // 3

set.clear();
console.log(set.size);  // 0
Set Operations: Sets support various operations like union, intersection, and difference. Although Sets don't provide built-in methods for these operations, you can perform them by combining Sets with other Set methods. For example:

javascript code
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

// Union
const union = new Set([...set1, ...set2]);
console.log(union);  // Set [1, 2, 3, 4, 5]

// Intersection
const intersection = new Set([...set1].filter(value => set2.has(value)));
console.log(intersection);  // Set [3]

// Difference
const difference = new Set([...set1].filter(value => !set2.has(value)));
console.log(difference);  // Set [1, 2]
Sets are useful for managing collections of unique values and performing operations that require unique elements. They are efficient for checking element existence and can simplify various data manipulation tasks in JavaScript.





Map Data Structure
The Map data structure introduced in ES6 provides a collection of key-value pairs and offers several methods for data manipulation. Here's an overview of how to use the Map data structure for data manipulation in ES6:

Creating a Map: You can create an empty Map or initialize it with an iterable (such as an array) containing key-value pairs. For example:

javascript code
const map = new Map();
const mapWithValues = new Map([['key1', 'value1'], ['key2', 'value2']]);
Adding and Updating Entries: The Map provides the set() method to add or update key-value pairs. You can use set() to set the value for a specific key. If the key already exists, it will update the corresponding value. For example:

javascript code
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key1', 'updatedValue');
Getting and Deleting Entries: You can retrieve the value associated with a specific key using the get() method. To delete an entry, you can use the delete() method. For example:

javascript code
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1'));  // 'value1'
map.delete('key2');
Checking Entry Existence: You can check if a key exists in a Map using the has() method, which returns a boolean indicating whether the key is present or not. For example:

javascript code
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map.has('key1'));  // true
console.log(map.has('key3'));  // false
Iterating through a Map: Maps maintain the insertion order of entries and provide methods to iterate through them. You can use forEach() or the for...of loop to iterate over the key-value pairs in a Map. For example:

javascript code
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
map.forEach((value, key) => {
  console.log(key, value);
});
// Output:
// 'key1' 'value1'
// 'key2' 'value2'

for (const [key, value] of map) {
  console.log(key, value);
}
// Output:
// 'key1' 'value1'
// 'key2' 'value2'
Size and Clearing: The Map has a size property that returns the number of entries in the Map. To clear all entries from a Map, you can use the clear() method. For example:

javascript code
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map.size);  // 2

map.clear();
console.log(map.size);  // 0
Maps are useful for managing key-value pairs and performing various data manipulation tasks that involve associative data. They provide efficient lookups by key and maintain the order of insertion. Maps can simplify many scenarios where data needs to be stored and accessed in key-value pairs.





WeakMap
The WeakMap data structure in ES6 is similar to the Map data structure but has a few differences and limitations. WeakMap allows only objects as keys and provides a weak reference to those objects, which means they can be garbage-collected if there are no other references to them. Here's an overview of how to use WeakMap for data manipulation in ES6:

Creating a WeakMap: You can create an empty WeakMap or initialize it with an iterable (such as an array) containing key-value pairs. For example:

javascript code
const weakMap = new WeakMap();
const obj1 = {};
const obj2 = {};
const weakMapWithValues = new WeakMap([[obj1, 'value1'], [obj2, 'value2']]);
Adding and Retrieving Values: The WeakMap provides the set() method to associate a value with a specific object key. You can use set() to set the value for a particular object. To retrieve a value, you can use the get() method and provide the object key. For example:

javascript code
const weakMap = new WeakMap();
const obj1 = {};
const obj2 = {};
weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');
console.log(weakMap.get(obj1));  // 'value1'
Checking Entry Existence and Deleting Entries: You can check if an object key exists in a WeakMap using the has() method, which returns a boolean indicating whether the key is present or not. To delete an entry, you can use the delete() method and provide the object key. For example:

javascript code
const weakMap = new WeakMap();
const obj1 = {};
const obj2 = {};
weakMap.set(obj1, 'value1');
weakMap.set(obj2, 'value2');
console.log(weakMap.has(obj1));  // true
weakMap.delete(obj2);
Limitations: WeakMap has a few limitations compared to Map:

WeakMap keys must be objects, and primitive values cannot be used as keys.
WeakMap is not iterable, so there are no methods like forEach() or entries() to iterate over its entries.
WeakMap does not have a size property to get the number of entries.
Use Cases: WeakMap is primarily useful when you need to associate additional data with specific objects without causing memory leaks. It is commonly used for storing private or internal data associated with objects in JavaScript classes or for implementing private or hidden properties.

It's important to note that WeakMap has a specific use case and is not a direct replacement for Map. Its weak referencing behavior makes it suitable for scenarios where automatic garbage collection of associated objects is desired.






Setup
Install NodeJS 12.11.x
(in your home directory):

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
Install Jest, Babel, and ESLint
in your project directory:

Install Jest using: npm install --save-dev jest
Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
Install ESLint using: npm install --save-dev eslint
Configuration files
package.json
Click to show/hide file contents

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

babel.config.js
Click to show/hide file contents

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

.eslintrc.js
Click to show/hide file contents

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};




