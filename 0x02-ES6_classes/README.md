0x02. ES6 classes
OOP
JavaScript
ES6


RESOURCES

1. Classes
In JavaScript, classes are a syntactical feature introduced in ECMAScript 2015 (ES6) that provide a convenient way to define object blueprints or templates for creating objects. They are a way to implement object-oriented programming (OOP) concepts in JavaScript.

A JavaScript class defines a blueprint for creating objects that share common properties and methods. It encapsulates data (properties) and functions (methods) into a single entity. You can think of a class as a blueprint or a template for creating objects of the same type.

Here's an example of a simple JavaScript class definition:

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  static createSquare(side) {
    return new Rectangle(side, side);
  }
}



In the example above, the Rectangle class has a constructor method, which is called when an object is created based on the class. The constructor sets the initial values of the width and height properties based on the arguments passed to it.

The calculateArea method calculates the area of the rectangle by multiplying its width and height.

The static keyword is used to define a static method on the class. Static methods are called directly on the class itself, rather than on an instance of the class. In this case, the createSquare method is a static method that creates a new instance of the Rectangle class with equal width and height, effectively creating a square.

To create an instance of a class, you use the new keyword:

const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.calculateArea()); // Output: 50

In this example, myRectangle is an object created from the Rectangle class. The calculateArea method is called on the myRectangle object, resulting in the calculation and output of the area.

JavaScript classes also support inheritance, where you can create a new class based on an existing class, inheriting its properties and methods. This allows for code reuse and the creation of more specialized classes.




2. Metaprogramming
Metaprogramming is the ability of a programming language to analyze, modify, or generate code dynamically at runtime. In JavaScript, metaprogramming can be achieved through various features and techniques, such as reflection, code evaluation, and manipulation of objects and functions.

Here are a few examples of metaprogramming techniques in JavaScript:

a.) Property Access and Manipulation:
JavaScript allows you to access and modify object properties dynamically. You can use this feature to create, modify, or delete properties of an object at runtime.

const obj = {};
const propertyName = 'dynamicProp';
const propertyValue = 42;

// Creating a new property dynamically
obj[propertyName] = propertyValue;

// Accessing the dynamically created property
console.log(obj.dynamicProp); // Output: 42

// Modifying the dynamically created property
obj.dynamicProp = 'New Value';

// Deleting the dynamically created property
delete obj.dynamicProp;


b.) Prototype Chain Manipulation:
JavaScript's prototypal inheritance allows you to modify an object's prototype dynamically, which affects all instances of that object.

function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // Output: John

// Modifying the prototype of Person dynamically
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

john.greet(); // Output: Hello, my name is John



3. Eval:
The eval function in JavaScript allows you to execute arbitrary code represented as a string. It can be used for dynamic code generation and execution.

const expression = "console.log('Dynamic code execution');";
eval(expression); // Output: Dynamic code execution

Note: The use of eval is generally discouraged due to security concerns and potential performance issues. It should be used with caution.


4. Proxy Objects:
The Proxy object in JavaScript allows you to intercept and customize operations on objects, such as property access, assignment, and function invocation. It enables powerful metaprogramming capabilities.

const target = {};
const handler = {
  get: function (target, prop) {
    console.log(`Accessing property: ${prop}`);
    return target[prop];
  },
  set: function (target, prop, value) {
    console.log(`Setting property: ${prop} to ${value}`);
    target[prop] = value;
  },
};

const proxy = new Proxy(target, handler);
proxy.name = 'John'; // Output: Setting property: name to John
console.log(proxy.name); // Output: Accessing property: name \n John


These are just a few examples of metaprogramming techniques in JavaScript. Metaprogramming can be a powerful tool, but it's important to use it judiciously and be aware of its implications on code readability, maintainability, and security.



LEARNING OBJECTIVES
How to define a Class
How to add methods to a class
Why and how to add a static method to a class
How to extend a class from another
Metaprogramming and symbols


