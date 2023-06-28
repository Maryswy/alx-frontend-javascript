0x01. ES6 Promises
JavaScript
ES6

Promise 
a Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It's a way to handle asynchronous code in a more structured and manageable manner.


Promises provide a cleaner alternative to using callbacks, which can lead to "callback hell" when dealing with multiple asynchronous operations. Promises help organize and control the flow of asynchronous code, making it more readable and maintainable.


A Promise can be in one of three states:

1. Pending: The initial state when a Promise is created. It's neither fulfilled nor rejected. Asynchronous operations are still in progress.
2. Fulfilled: The state of a Promise when the asynchronous operation is completed successfully. The Promise has a resolved value associated with it.
3. Rejected: The state of a Promise when the asynchronous operation encounters an error or fails. The Promise has a reason for rejection, typically an error object.


The main advantages of using Promises in JavaScript are:

1. Asynchronous control flow: Promises provide a structured way to handle the order and dependencies of asynchronous operations. You can chain multiple asynchronous operations together, making the code easier to read and reason about.
2. Error handling: Promises have built-in error handling mechanisms. You can use the catch() method to catch and handle errors that occur during the Promise chain, regardless of where they happen in the chain.
3. Composition: Promises allow you to compose and combine asynchronous operations. By returning a Promise inside a then() callback, you can create a chain of operations that depend on the previous results.
4. Avoiding callback hell: Promises help mitigate the problem of deeply nested and unreadable code that can arise from using callbacks for asynchronous operations.
5. Support in modern JavaScript: Promises are a native feature of JavaScript since ECMAScript 6 (ES6). They are widely supported in modern browsers and are the foundation of many modern asynchronous patterns and libraries.
Overall, Promises provide a more intuitive and manageable way to handle asynchronous operations in JavaScript, improving code readability and maintainability.



JavaScript Promise: An introduction
JavaScript Promise is a feature introduced in ECMAScript 6 (ES6) that provides a way to handle asynchronous operations in a more structured and manageable manner. It's a powerful tool for dealing with asynchronous code, avoiding callback hell, and promoting clean and readable code.

At its core, a Promise is an object that represents the eventual completion or failure of an asynchronous operation. It acts as a placeholder or proxy for a value that may not be available yet. Promises have three states: pending, fulfilled, and rejected.

Here's a brief overview of the three states:

1. Pending: The initial state when a Promise is created. It represents that the asynchronous operation is still in progress, and the Promise is neither fulfilled nor rejected.

2. Fulfilled: The state of a Promise when the asynchronous operation is successfully completed. The Promise transitions to this state by calling the resolve() function. It signifies that the promised value is available.

3. Rejected: The state of a Promise when the asynchronous operation encounters an error or fails. The Promise transitions to this state by calling the reject() function. It signifies that an error occurred during the operation.



Promises provide a set of methods that allow you to handle and chain asynchronous operations:

- then(): This method is used to handle the resolved value of a Promise. It takes two optional callbacks as arguments: onFulfilled and onRejected. These callbacks will be executed when the Promise is fulfilled or rejected, respectively.

- catch(): This method is used to handle any errors that occurred during the Promise chain. It is similar to then(), but specifically handles only the rejected state of the Promise.

- finally(): This method is used to specify a callback that will be executed regardless of whether the Promise is fulfilled or rejected. It allows you to perform cleanup tasks or finalize actions after the Promise chain is complete.

Promises also allow you to chain multiple asynchronous operations together, creating a more readable and sequential flow. By returning a Promise inside a then() callback, you can create a chain of operations that depend on the previous results.

Promises are widely supported in modern JavaScript environments, including browsers and Node.js. They have become the foundation for many asynchronous patterns and libraries. Additionally, with Promises, you can leverage other features like async/await to further simplify and enhance asynchronous code readability.

Overall, JavaScript Promises provide a structured and organized approach to working with asynchronous operations, making your code more manageable and easier to reason about.




Await
await is a keyword used in JavaScript in conjunction with async functions to simplify and enhance the handling of Promises. It allows you to write asynchronous code in a more synchronous style, making it easier to read and understand.

When you mark a function with the async keyword, it becomes an asynchronous function. Within an asynchronous function, you can use the await keyword to pause the execution of the function until a Promise is resolved. The await keyword can only be used inside async functions.

Here's how you can use await with Promises:
1. Waiting for a Promise: When you encounter a Promise, you can use await to pause the execution of the function until the Promise is fulfilled or rejected. The await expression returns the resolved value of the Promise.

async function asyncFunction() {
  const result = await somePromise;
  // Code here will not execute until somePromise is resolved
  console.log(result);
}

In the example above, the asyncFunction will pause at the await statement until somePromise is resolved, and then it will assign the resolved value to the result variable.



2. Error handling with try/catch: You can handle errors thrown by a Promise by wrapping the await statement in a try/catch block.

async function asyncFunction() {
  try {
    const result = await somePromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

If somePromise is rejected, the code inside the catch block will execute, allowing you to handle the error appropriately.

3. Awaiting multiple Promises: You can use multiple await statements to wait for multiple Promises sequentially. This ensures that each Promise is resolved before moving on to the next one.

async function asyncFunction() {
  const result1 = await promise1;
  const result2 = await promise2;
  console.log(result1, result2);
}

In this example, result1 will be assigned the resolved value of promise1, and only after that will result2 be assigned the resolved value of promise2.


Using await with Promises simplifies the handling of asynchronous operations and avoids the need for excessive nesting or chaining of then() and catch() methods. However, it's important to remember that await can only be used inside async functions.

It's worth noting that if a non-Promise value is provided to await, it will be automatically wrapped in a resolved Promise, allowing you to work with both Promises and non-Promise values in a consistent manner.

Overall, await is a powerful keyword that improves the readability and organization of asynchronous code by allowing you to write it in a more synchronous style.





Async
In JavaScript, async and await are used together to handle Promises in a more concise and synchronous-like manner. The async keyword is used to declare an asynchronous function, while the await keyword is used within that function to pause the execution and wait for a Promise to resolve.

Here's how async and await work together:

1. Async Function Declaration: When you declare a function using the async keyword, it becomes an asynchronous function. Asynchronous functions always return a Promise implicitly, which wraps the value returned by the function. You can declare an asynchronous function like this:

async function myAsyncFunction() {
  // Function body
}


2. Awaiting a Promise: Inside an asynchronous function, you can use the await keyword to pause the execution and wait for a Promise to resolve. The await expression can only be used within an asynchronous function.

async function myAsyncFunction() {
  const result = await somePromise;
  // Code here will not execute until somePromise is resolved
  console.log(result);
}

In the example above, the execution of myAsyncFunction will pause at the await statement until somePromise is resolved. Once resolved, the resolved value will be assigned to the result variable, and the function will continue its execution.


3. Error Handling: You can handle errors thrown by a Promise inside an asynchronous function by using a try...catch block.

async function myAsyncFunction() {
  try {
    const result = await somePromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

If somePromise is rejected, the code inside the catch block will execute, allowing you to handle the error gracefully.


Using async and await can greatly simplify asynchronous code, especially when dealing with Promises. It allows you to write asynchronous operations in a more linear and synchronous-like style, making the code more readable and easier to understand.

It's important to note that using await is only valid inside asynchronous functions. If you try to use it outside of an asynchronous function, it will result in a syntax error.

Additionally, when you use await, the execution of the function is paused until the awaited Promise is resolved. This means that the code after the await statement will not execute until the Promise is fulfilled, allowing for sequential and orderly execution of asynchronous operations.

Overall, async and await are powerful tools for working with Promises in JavaScript, providing a more readable and synchronous-like syntax for handling asynchronous code.




Throw / Try
In JavaScript, when working with Promises, you can use the throw statement or a try...catch block to handle errors and reject the Promise accordingly.

1. Throwing an error: Within the executor function of a Promise, or within a then() callback, you can use the throw statement to indicate an error occurred. When an error is thrown, the Promise will be rejected, and the subsequent catch() callbacks in the Promise chain will be triggered.

const promise = new Promise((resolve, reject) => {
  // Some condition that results in an error
  if (condition) {
    throw new Error('Something went wrong');
  }

  // Asynchronous operation
  // Resolve the Promise
  resolve(value);
});

In the example above, if the condition evaluates to true, the throw statement is executed, creating and throwing a new Error object. This will cause the Promise to be rejected.



2. Handling errors with try...catch: When working with Promises, you can use a try...catch block to catch errors that occur within an asynchronous operation. This can be useful when you need to handle specific errors or perform custom error handling logic.

async function myAsyncFunction() {
  try {
    const result = await somePromise;
    // Code that relies on the resolved value
  } catch (error) {
    // Error handling logic
  }
}

In the example above, any errors that occur during the execution of somePromise will be caught in the catch block, allowing you to handle the error appropriately.

It's important to note that the try...catch block will only catch errors that occur within the await expression or synchronous code following it. If the error occurs outside the await expression, it won't be caught by the catch block of the immediate try...catch.


By combining the ability to throw errors and using try...catch blocks, you can handle and manage errors in Promises effectively. Throwing an error within a Promise's executor function or a then() callback will reject the Promise, and using try...catch blocks allows you to catch and handle errors in a more controlled manner within an asynchronous function.





General
Promises (how, why, and what)
How to use the then, resolve, catch methods
How to use every method of the Promise object
Throw / Try
The await operator
How to use an async function



Files
package.json
Click to show/hide file contents
babel.config.js
Click to show/hide file contents
utils.js
Use when you get to tasks requiring uploadPhoto and createUser.

Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents



Response Data Format
uploadPhoto returns a response with the format

{
  status: 200,
  body: 'photo-profile-1',
}
createUser returns a response with the format

{
  firstName: 'Guillaume',
  lastName: 'Salva',
}

