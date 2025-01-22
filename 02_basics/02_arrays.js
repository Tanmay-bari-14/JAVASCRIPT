const sports = ["cricket", "hockey", "football"];
const animal = ["tiger", "lion", "rhino"];

// sports.push(animal);

// console.log(sports);
// console.log(sports[3][1]);

const newArr = sports.concat(animal); //concat is also used for merging arrays but people prefer to used spread operator '...', the reason is   concat hold maybe only 2 merging array but in spread we used to do multiple arrays
// console.log(newArr);

const combinedArray = [...animal, ...sports]; //used to merge array in better ways like, you can merge multiple aarays using this
// console.log(combinedArray);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [5]]; //use flat() to get all nested array in one array
const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

console.log(Array.isArray("Tanmay"));
console.log(Array.from("Tanmay"));
console.log(Array.from({ name: "tanmay" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
