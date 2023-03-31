// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Template of a jest test
  // describe("greeter", () => {
  //   it("returns a generic greeting", () => {
  //     expect(greeter()).toEqual("Hello, LEARN student!")
  //   })
  // })

// Template for pseudocode
// Function Signature
// input: number
// output: string indicating allowed, denied, or error

// input: 39
// output: "Cannot ride the rollercoaster"

// Process
// create a function called tallEnough that takes in a number called height
// if height is less than 40 return "Cannot ride the rollercoaster"
// if height is greater than or equal to 40 return "Buckle up, let's ride"
// any other input return error

// Template of function
// const greeter = () => {
//   return "Hello, LEARN student!"
// }



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe("divThree", () => {
//     it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
//       const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
//       const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
//       const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"
//       expect(divThree(object1)).toEqual("15 is divisible by three") 
//       expect(divThree(object2)).toEqual("0 is divisible by three")
//       expect(divThree(object3)).toEqual("-7 is not divisible by three")
//     })
// })

// Test failed
    //  FAIL  week-2-assessment-JAKEDAHLGREN/code-challenges.test.js
    //   divThree
    //   ✕ takes a object as an argument and decides if the number inside it is evenly divisible by three or not

    // ● divThree › takes a object as an argument and decides if the number inside it is evenly divisible by three or not

// b) Create the function that makes the test pass.

// Pseudocode
// Input: An object as an arguement 
// Output: A string saying "(number) is divisible by three" or "(number) is not divisible by three"

// Example
// Input:{ number: 15 }
// Output:"15 is divisible by three"

// Process

// Create a function named divThree
// Use the parameter object
// create an if else statment 
// Use the modulo operator to divide by three
// If the object's key(number) strictly equals 0
// Return the "number" plus "is divisible by three" using string interpilation 
// Else, the object strictly does not equal 0
// Return the "number" plus the text " is not divisible by three" using string interpilation 

// Function

// const divThree = (object) => {
//   if (object.number % 3 === 0){
//     return `${object.number} is divisible by three`
//   } else {
//     return `${object.number} is not divisible by three`    
//   }
// }

// Refactor

// I don't really understand how to refactor, and need help.

// Test passed

    //  PASS  week-2-assessment-JAKEDAHLGREN/code-challenges.test.js
    //   divThree
    //   ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not (1 ms)


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe("firstLetterCap", ()=> {
//     it("takes in an array of words and returns an array with all the words capitalized", () => {
//      const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//      // Expected output: = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//      const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//      // Expected output: = ["Temperature", "Database", "Chopsticks", "Mango"]
//      expect(firstLetterCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//      expect(firstLetterCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
// })

// Test failed

    // FAIL  week-2-assessment-JAKEDAHLGREN/code-challenges.test.js
    // firstLetterCap
    //   ✕ takes in an array of words and returns an array with all the words capitalized

    // ● firstLetterCap › takes in an array of words and returns an array with all the words capitalized

    //   ReferenceError: firstLetterCap is not defined



// b) Create the function that makes the test pass.

// Pseudocode
// Input: An array
// Output: A new array with each word capitalized

// Example
// Input:["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Output:["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// Process
// Create a function named firstLetterCap
// Use array as the parameter
// I can use the .map method because the words in the array are already split into individual words
// Use the .toUpperCase method at index 0 
// Then the .slice at the first character to remove the first letter
// Use string interpilation I can join index 0 back to my split method 
// .map will interpilate through all the strings
// Then console.log the function with the argument of the array
// Return the capitalized strings back into my new array

// Function

// const firstLetterCap = (array) => {
//   return array.map(value => {
//     return `${value[0].toUpperCase()}${value.slice(1)}`
//   })
// }

// console.log(firstLetterCap(["streetlamp", "potato", "teeth", "conclusion", "nephew"]))
// console.log(firstLetterCap(["temperature", "database", "chopsticks", "mango"]))

// Test passed

// PASS  week-2-assessment-JAKEDAHLGREN/code-challenges.test.js
// firstLetterCap
//   ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  it("takes in a string and logs the index of the first vowel",() => {
    const vowelTester1 = "learn"
// Expected output: 1
    const vowelTester2 = "academy"
// Expected output: 0
    const vowelTester3 = "challenges"
// Expected output: 2
    expect(firstVowel(vowelTester1)).toEqual([1])
    expect(firstVowel(vowelTester2)).toEqual([0])
    expect(firstVowel(vowelTester3)).toEqual([2])
  }) 
})



// b) Create the function that makes the test pass.

// Pseudocode
// Input: A string 
// Output: The index value as a number of the first vowel

// Example
// Input: "learn"
// Output: [1]

// Process
// Create a function named firstVowel
// Because the variables given are in the form of a string, I will need to put it into an array before I can call for the index of the first vowel
// I can use the split method, which will separate each character into independant strings, and place them inside of a array
// After I use split my new array with individual character string values should look like this ["l", "e", "a", "r", "n"]
// I can create a variable named vowels holding all the vowels in an array ["a", "e", "i", "o", "u"]
// To to look for vowels I will use .filter() with vowels as the parameter
// I also need to use something like .indexOf to give give the position of the first vowels index
// Return the number of the first vowel's index as an array using console.log

// Comment - I have tried a million different ways to setup my function and the test keeps failing. I either get that the built in methods I am trying aren't functions, or part of my function is undefined. In the console log I tried calling the vowel [i] , I tried using the variable names, and firstVowel[i]. I have rearrange the function syntax several different ways to no avail. I deleted everything and started from scratch multiple times. I know I need to use another built in like indexOf (which I tried, but must have implemented it incorrectly) or something to return the [value] of the first vowel, but I am to the point where whenever I try to look at this problem again I go cross-eyed. I hate throwing in the towel, but I am at a loss on what I am doing wrong. PLEASE HELP!!!

// Function
  const vowelTester1 = "learn"
        // Expected output: 1
  const vowelTester2 = "academy"
        // Expected output: 0
  const vowelTester3 = "challenges"
        // Expected output: 2
  const vowel = ["a", "e", "i", "o", "u"]   

  const firstVowel = (string) => {
    return string.split(""), string.filter(stirng.indexOf(["a", "e", "i", "o", "u"],value) => {
      return value [0]
    }) 
  }
  console.log(firstVowel("learn"))
  console.log(firstVowel("academy"))
  console.log(firstVowel("challenges"))
      
//   const firstVowel = (string) => {
//     return string.split("")((value) => {
//     return string.indexOf(vowel) => {
//       return value === [0]
    
//     })  
//   })
// }
