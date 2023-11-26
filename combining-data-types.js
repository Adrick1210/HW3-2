console.log("combining data types");

const crayonBox = {
  color: ["red", "blue", "green", "yellow"],
};

console.log(crayonBox.color[0]);

// logging object values of bottle
const bottle = {
  cap: {
    material: "metal",
    color: "blue",
  },
};

console.log(bottle.cap.material);
console.log(bottle.cap.color);

// logging a object value of receipt
const receipt = [
  {
    name: "pizza",
    price: 25,
  },
  {
    name: "pasta",
    price: 20,
  },
];

console.log(receipt[0].name);
console.log(receipt[1].price);

// apartment building array
const apartmentBuilding = [["john", "beth", "christian", "chuthulu"]];

console.log(apartmentBuilding[0][1]);
console.log(apartmentBuilding[0][3]);

//======================================================
// Combine objects, arrays, and functions more than one level deep
//======================================================

function knit(item, size) {
  let cloth = {
    item: "scarf",
    size: "6ft",
  };
  return cloth;
}
console.log(knit().item);

// callback to the crayonBox array
const crayonSelector = (crayonBox) => {
  console.log(crayonBox);
};

crayonSelector(crayonBox.color[2]);

// callback option to options function
const options = () => {
  console.log("select a song");
};

const powerButton = (option) => {
  option();
};

powerButton(options);

//======================================================
// Vending Machine
//======================================================

const vendingMachine = {
  snacks: [
    { name: "Hershey", price: 2 },
    { name: "lays", price: 1.5 },
    { name: "gummy bears", price: 0.5 },
  ],
  vend: (num) => {
    if (num === 0) {
      console.log(vendingMachine.snacks[0].name);
    } else if (num === 1) {
      console.log(vendingMachine.snacks[1].name);
    } else if (num === 2) {
      console.log(vendingMachine.snacks[2].name);
    }
  },
};
// console.log(vendingMachine.snacks[1]);
vendingMachine.vend(0);
vendingMachine.vend(2);

//======================================================
// Callbacks
//======================================================

// add function
const add = (num1, num2) => {
  console.log(num1 + num2);
};

//subtract function
const subtract = (num1, num2) => {
  console.log(num1 - num2);
};

// multiply function
const multiply = (num1, num2) => {
  console.log(num1 * num2);
};

// divide function
const divide = (num1, num2) => {
  console.log(num1 / num2);
};

// calculate function
const calculate = (num1, num2, operates) => {
  return operates(num1, num2);
};
calculate(8, 12, multiply);
calculate(2, 4, divide);

// cleanup code

// bar(); // moved to after the function declaration
// const bar = () => {
//     console.log('bar here');
// }
// bar(); // will run

// foo() // moved to after the function declaration
// const foo = () => {
//     console.log('foo here');
// }
// foo(); // will run

// errors

// foo();

// const foo ()=>{
//     console.log('hi');
// }

// foo is called before the function itself is declared. If foo()
// is called after the function, it should run.

//======================================================
// Array Methods with Callbacks
//======================================================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

// every
let equalZero = nums.every((num) => nums[num] >= 0);
console.log(equalZero);

let eightChar = panagram.every((str) => str.length < 8);
console.log(eightChar);

// filter
let lessFour = nums.filter((num) => num <= 4);
console.log(lessFour);

let evenLength = panagram.filter((str) => str.length % 2 === 0);
console.log(evenLength);

// find
let findFive = nums.find((num) => num % 5 === 0);
console.log(findFive);

let wordFive = panagram.find((str) => str.length >= 5);
console.log(wordFive);

// find index
let indexThree = nums.findIndex((num) => num % 3 === 0);
console.log(indexThree);

let wordIndex = panagram.findIndex((str) => str.length >= 2);
console.log(wordIndex);

// for each
let byThree = nums.forEach((num) => console.log(num * 3));

let explanation = panagram.forEach((str) => console.log(str + "!"));

// Nothing happened to the original array as the new values weren't
// modified to the original array.

// I can store those new values in a new array I declare.

// map
let newArr = [];
let bigNum = nums.map((num) => newArr.push(num * 100));
console.log(newArr);

let upArr = [];
let upperCase = panagram.map((str) => upArr.push(str.toUpperCase()));
console.log(upArr);

// Nothing has changed the original array still. As I've stored the new values
// into a new array.

// I can store values from a map method inside of a new array.

// some
let bySeven = (num) => num % 7 === 0;
console.log(nums.some(bySeven));

let isA = panagram.some((letter) => letter.includes("a")
);
console.log(isA);
