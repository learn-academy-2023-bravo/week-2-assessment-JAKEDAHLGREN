// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
// console.log(cohort.split(""))

// a) Your answer:

// ["B", "r", "a", "v", "o", " ", "2", "0", "2", "3"]

// b) Verify and explain: 

// Correct! .split with a space between the " " would have returned "Bravo", "2023" because you are asking for full words, but because there wasn't a space the console.log is asking .split to separate each individual character and place it between "".

// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
//  console.log(greeter("LEARN Student"))

// a) Your answer: 

// Undefined, because there is no return in front of the string interpilation `Hello, ${name}!`

// b) Verify and explain:

// I almost fell for the trick, but then I remembered Trish and Charlean saying that if you open {} there needs to be a return to define what the function returns

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:

// [8, 10, 12, 7, 8] 

// b) Verify and explain:

// Correct! The .map method iterates through an array and returns a new array with the same index. In this case, we are asking the function multipliedByTwo to iterate through each indexed value and multiply that number by two, then it returns the new array with the data values doubled.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer:

// [1, 1, 1]

// b) Verify and explain:

// Incorrect, I answered to quickly before I realized what the function was stating. The modulo operator is telling the function to divide each array element by two, then decide if it is stricly not equal to zero. I thought it would log the remainder of the uneven numbers that aren't equal to zero, but the function has (number) as parameter. The code is asking to log the full values of the array elements that are strictly not zero. I got cocky after the last question, and just like that JavaScript humbles me again... Correct answer [11, 13, 15]

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: 

// JavaScript

// b) Verify and explain:

// Correct! The console.log is using object as an argument at the languages key with the index value of 0. The language key only has 2 index positions inside its value 0 = JavaScript and 1 = Ruby

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: 

// Undefined, because the console log hasn't defined the class that the new object learnStudent is in and connected the class and key together with dot notation. 

// My attempt would be - console.log(Learn.learnStudent)

// b) Verify and explain:

// Incorrect, I think I confused accessing a key:value pair of an object with this prompt. This function is adding an object named learnStudent(key) with the value of "George" to a class, and then asking it to run the arguement learnStudent through the constructor with parameter name. So if learnStudent = "George" and the key this.student is referencing the parameter as its value, it makes sense that the outcome would be { student: 'George', cohort: 'Bravo', year: 2023 }. Instead of evaluating the code, at times I get to focused on trying to figure what has been left out of the code that will make it not work.