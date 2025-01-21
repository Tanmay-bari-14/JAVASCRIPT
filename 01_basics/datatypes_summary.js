//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

// console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++++++STACK & HEAP MEMORY+++++++++++++++++++++++++++++++++++++++++++++++

//premitive datatypes are store in a STACK MEMORY and gives you a duplicate in order to stack

let name = "Tanmay Bari";

let newName = name;

newName = "Bari";

console.log(newName);
console.log(name);

// non premitive datatypes are store in HEAP MEMORY and gives reference from original => basically it changes in original data  => (Array, Objects, Functions)

let personData = {
  email: "person@gmail.com",
  password: 123,
};

let anotherPerson = personData;

console.log(anotherPerson);

console.log(anotherPerson.password);

anotherPerson.id = 10;

console.log(anotherPerson);
console.log(personData);
