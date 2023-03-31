# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: 

A parameter is a space holder for the data being given. It is usually at the begining of a function, and placed inside (). It can be anything from an array to a number or string. This is what we will be looking at when running the function. An arguement is what we are passing though the function to get our output. Typically this is found at the end of the function in the console log.

Researched answer:

A parameter is a variable that is defined in the functions declaration. It represents a value that the function expects to receive when it is called.

Conversly, an argument is a value that is passed to a function when called. Arguments will be assigned to the corresponding parameters in a function's declaration.


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:

 The JavaScript built in method .map() can take in up to three parameters, but only one is required for it to function properly. The parameters are value, index, and array. Out of those three the only required parameter is value, the other to are optional. Also, I believe you can rename these parameters to anything you would like, but it will always return as value, index, and array in that order.

Researched answer:

 The built in method .map(), as related to JavaScrip, can have up to four parameters. These parameters are: currentValue, index, arr, and thisValue. The method .map() only requires one parameter to function, and that is currentValue. The current index position of the element, the current array of the element, and this value (which defaults as undefined) passed to a function to be used are not required as parameters to use .map. When this method iterates through the origional array, you must alter the value in some way for it to return a new array of the same.

3. What is the difference between map and filter?

Your answer:

 The JavaScript built in methods map and filter have a lot of similarities. They both are used on arrays to iterate through the indexed data to create a new function. Where they differ is the length of the new array. The map method returns an array of the same index value, where as the filter method returns an array of only data values that pass the filters test parameters.

Researched answer:

The map method is used when you want to create a new array, by giving it a function to perform on each element. This new array will be the same length as the original, but every element inside the array will be transformed according to the function that was applied. At the end you will have two arrays, of the same length, with different values of each element. 

The filter method is used to return a completely different array, that is equal to or shorter in length. With this method you are asking your function to iterate through your given array, and only return the elements that pass the test function you create. Filter will give you a new array of only the elements that pass the test, but it will not change the value of those elements. The only time filter would return an array that is the same length is if every variable inside the array passes the test, and in that case you didn't create a very strict filter. 

1. What is iteration?

Your answer:

 Iteration is when your function performs a task over and over again until a condition is met or it reaches the end of the given data. For example the .map built in method goes through each index item of an array, performs whatever changes you called for in your code to those index items, and returns a new array. It iterated through the array values one at a time, and the iteration stopped once .map ran its indicated function to the last index item.

Researched answer:

Iteration is the process of repeating a set of instructions or operations multiple times until the conditions are met. It is a fundamental concept in developing and has many uses. It can be used to loop over a collection of data, executing a block of code multiple times with different inputs, or simulating a system over and over. Most commonly iteration is refering to loops which are an essential tool for working with large collections of data and creating automated processes with repetitive tasks.

1. What is the difference between a function and a method?

Your answer: 

Functions are the reusable code that run a set of logic. Methods, like functions, do the same thing, but they are specific to objects. Basically, when a function is belongs to a function, it is a method.

Researched answer:

A function is a block of code that is created to perform a particular task over and over. A method is an object property that is assigned a function value. The data passed to functions and methods are different. A function gets passed explicit data that is operated and can be returned, where as a method operates the data contained in a class and passes the called object. When calling a method you need to use dot notation connecting the name of the object and the method name, but with functions you can simply call it directly by its name. Ex. the () operator is used to call a function, and objectName.methodName() is how you inact a method.

6. STRETCH: What is hoisting in JavaScript?

Your answer:

Hoisting is the JavaScript phenominon that runs a function first no matter where it is located within the code. Unlike when we read as humans, from left to right, top to bottom, computers analys data in a hierarchy.

Researched answer:

JavaScript Hoisting is refering to the process when the interpreter or computer reading the code seems to move the function that has been declared to the top of their scope before it begins to execute the code.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component:

A modular piece of code, in React, that represents a part of the user interface. Components, like functions, can be reused and added together in order to make more complex interfaces. They can be either function based or class based.

2. Spread operator:

This allows you to expand an iterable (think array) to be expanded in place where multiple arguments or elements are expected. It is denoted by three dots ... followed by the name of the iterable container

3. React state:

An object that stores data, but can change over time in a React component. Commonly used to manage user input, page navigation, and other dynamic behaviors. the denotaion `useState` is commonly used to manage function-based components, and `setState` is typically used for class-based methods.

4. React props:

Messages, sent to users, to prompt them for an action or input. Modals or alerts are common methods for implementing these prompts.

5. DOM events:

Actions that occur in a web page, like a button click, submission of a form, or page load. They are handled by using event listeners, which allows your code to execute only after an event occurs. some DOM events include "click", "submit", "mouseover", and "keydown".
