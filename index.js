// Question 1 Answers // // Arrays //
const arrayNumbers = [1,2,3,4,5,6,7,8,9,10];

let newArray = arrayNumbers[4];

let newArrayTwo = arrayNumbers[9] = 17;

let newArrayThree = arrayNumbers.push(11);

let newArrayFour = arrayNumbers.shift();

let newArrayFive = arrayNumbers.indexOf(5);

if(arrayNumbers.includes(8)){
    console.log('The number 8 is in the array');
}

let reverseArray = arrayNumbers.reverse();

let sortArray = arrayNumbers.sort();

// Question 2 Answers // // While loops //
let y = 0;
while(y < 11){
    console.log(y)
    y++
}


// Question 3 Answers // //ForEach Method //

let myArray = [2, 4, 6, 8, 10]; // 1 //

myArray.forEach(function(element) {
  console.log(element);
});

let numbers = [10, 25, 8, 11, 4]; // 2 //

numbers.forEach(function(number, index) {
  numbers[index] *= 2;
});
console.log(numbers)


let mixedArray = [10, "hello", 5.5, "world", true, "JavaScript"]; // 3 //
let stringsArray = [];

mixedArray.forEach(function(element) {
  if (typeof element === 'string') {
    stringsArray.push(element);
  }
});

console.log(stringsArray);

let numbersArray = [4, 5, 8, 1, 2, 9]; // 4 //
let evenSum = 0;

numbersArray.forEach(function(number) {
  if (number % 2 === 0) {
    evenSum += number;
  }
});

console.log(evenSum);


let array_numbers = [4, 12, 5, 8, 2]; // 5 //
let filteredNumbers = [];

array_numbers.forEach(number => {
  if (number > 6) {
    filteredNumbers.push(number);
  }
});

console.log(filteredNumbers);

// Question 4 //  // Rest Parameters //

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
console.log(sum(2,4,6,10,12));



function calculatedAverage(...numbers) {
  if (!numbers.length) {
    return null;
  }
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
    return sum / numbers.length;
}

console.log(calculatedAverage(10,10,10));

function AllArguments(...args) {
 for (const arg of args) {
   console.log(arg);
 }
}

AllArguments(1, 2, 3, "hello", true);


// Question 5 // // Object Literal //

const person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

console.log(person);


const personName = person.name; // Accessing The 'name' property //
console.log(personName);

personObject.age = 32; // Changing the value of the age property//
console.log(personObject)

personObject.email = 'eniolabadmus@gmail.com' // Adding An Email Property To The Object Literal //

delete personObject.age // Deleting the age property in the object //



// Question 6 //  // For Loops //

for(x = 0; x < 11; x++) // Prints Numbers from 1-10 //
console.log(x)

function sumArrayElements(numbNumb) {
  let sum = 0;
  for (let i = 0; i < numbNumb.length; i++) {
    sum += numbNumb[i];
  }
  return sum;
}

const numbNumb = [1, 2, 3, 4, 5]; // Sum Numbers in an array //
const totalSum = sumArrayElements(numbNumb);
console.log(totalSum)


function findMax(number) {  // Find the max value in an array //
  let max = number[0]; 
  for (let i = 1; i < number.length; i++) {
    if (number[i] > max) {
      max = number[i];
    }
  }
  return max;
}

const number = [5, 10, 2, 7, 15];
const largestNumber = findMax(number);
console.log(largestNumber)



// Question 7 // // For-Of Loop //

const arrayElement = [1,3,5]  //  Print element in an array //
for(const element of arrayElement){
    console.log(element);
}

const personObj = { // Iterate over keys of an object //
  name: "John Doe",
  age: 30,
  city: "New York",
};

for (const value of Object.values(personObj)) {
  console.log(value);
}


const personArray = { name: "John Doe", age: 30, city: "New York" }; // Iterate over keys and object //

for (const [key, value] of Object.entries(personArray)) {
  console.log(`${key}: ${value}`);
}



// Question 8 // // Additional Questions //

// A //  // 1. On Condition //
//  While loop. Continues as long as the loop condition evaluation is true 
// For loop. Evaluated before each iteration. Loop continues if true

// 2. Initialization //
//  While loop . Can be anywhere before the loop, inside, or outside.
// For loop . Executed once at the beginning of the loop

// 3. Use Cases //
// While loop . When the number of itertion is not unknown before hand, or depends on a dynamic condition
// For loop. Whne the number of iteration is known before hand



//B// // Will use the forEach loop over other traditional loop
// because it eliminates the need for initializing and increment unlike other traditional loop methods //

// forEach focus on actions of element rather than control flows which leads to modular and re usable code 

// C // Benefit of using the rest parameter //

// they allow a function to accept an indefinite number of arguments as an array. This eliminates the need for manual checks and handling of different argument lengths, making the function more versatile.

// You can use the rest parameter with the spread operator (...) to easily pass an array's elements as individual arguments to another function. This improves code readability and maintainability //

// Nested object literal //
const personObject = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  },
  hobbies: ["coding", "reading", "hiking"]
};

// Arrays can be iterated using 
// methods like for loops, while loops forEach loop //

function removeDuplicatesWithReduce(arr) { // To check duplicate array //
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}

function hasCommonElementsWithLoop(arr1, arr2) { // To check common elements in an array //
  for (const item1 of arr1) {
    for (const item2 of arr2) {
      if (item1 === item2) {
        return true;
      }
    }
  }
  return false;
}












