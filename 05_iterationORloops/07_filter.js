const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// FILTER is used to check conditional checks in a loop ,,,,,,,,,, you can also do this via "FOR EACH" but in this you had to check condition with the help of "IF"
const filterNumber = numbers.filter((num) => {
  return num > 5;
});

console.log(filterNumber);

// using FOR-EACH
// you can store FOR-EACH in a variable to do this use empty array and push the values in it

let numbersData = [];

numbers.forEach((num) => {
  if (num > 5) {
    numbersData.push(num);
  }
});

console.log(numbersData);

// +++++++++++++++++++++++++++++++++++++++++ practice que FILTER +++++++++++++++++++++++++++++

const studData = [
  {
    studName: "AAA",
    age: 25,
    passingYear: 2016,
    result: "pass",
  },
  {
    studName: "BBB",
    age: 35,
    result: "pass",
  },
  {
    studName: "CCC",
    age: 23,
    result: "pass",
  },
  {
    studName: "DDD",
    age: 66,
    result: "fail",
  },
  {
    studName: "EEE",
    age: 14,
    result: "pass",
  },
  {
    studName: "FFF",
    age: 45,
    result: "fail",
  },
  {
    studName: "GGG",
    age: 20,
    result: "fail",
  },
  {
    studName: "HHH",
    age: 25,
    result: "pass",
  },
  {
    studName: "III",
    age: 23,
    result: "pass",
  },
  {
    studName: "JJJ",
    age: 20,
    result: "pass",
  },
  {
    studName: "KKK",
    age: 25,
    result: "pass",
  },
];

const response = studData.filter((data) => {
  return data.studName == "AAA" || data.age > 30;
});

console.log(response);
