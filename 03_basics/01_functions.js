function sayMyName() {
  console.log("t");
  console.log("a");
  console.log("n");
  console.log("m");
  console.log("a");
  console.log("y");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// ++++++++++++++++++= PRACTICE +++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++ OBJECTS
const studData = {
  name: "Tanmay",
  rollNo: 10,
};

function getData(obj) {
  return `${obj.name} 's roll no. is ${obj.rollNo}`;
}

// console.log(getData(studData));
console.log(
  getData({
    name: "Bari",
    rollNo: 23,
  })
);

//++++++++++++++++++++++++++++++++++++++++++ ARRAYS

const Array = [10, 20, 30, 40];

function callArray(data) {
  return data[2];
}

console.log(callArray(Array));
console.log(callArray([11, 22, 33, 44]));
