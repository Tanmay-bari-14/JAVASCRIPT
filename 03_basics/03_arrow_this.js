const user = {
  name: "Tanmay",
  age: 21,
  greet: function () {
    console.log(`${this.name}`);
    console.log(this);
  },
};

// user.greet;
// user.greet(); // basically this refers to the current context that is the reason the value we get from the define obect/context => but below.....
// user.name = "Bari"; // we change the object/context
// user.greet(); // as we change the context the value will be changed and the result is different from the above as we chage the value to "Bari "

// console.log(this); // into the node environment "this" is the empty object because there is nothing into the golbal BUT it's different in the browser because the global object is window and the reason is empty object in other environment like node, deno is, engine is standalone

// +++++++++++++++++++++++++++++++++++++++++++++++ Extra INFO about THIS ++++++++++++++++++++++++++++++++++++++++++++++++

function data() {
  console.log(this); // if you write this into you get extra info
}
// data();

function data2() {
  let name = "Tanmay";
  console.log(this.name); // if you declare variale into function and try to access it, it's not accessible

  // beacuse "THIS" is not work in a functions it's only work with the objects
}
// data2();

// +++++++++++++++++++++++++++++++++++++++++++++++ Arrow Fn ++++++++++++++++++++++++++++++++++++++++++++++++

// BASIC FUNCTION
function one() {
  console.log("Tanmay Bari");
}
// one();

// Arrow FUNCTION
const two = () => {
  console.log("Tanmay Bari");
};
two();

// EXPLICIT RETURN => in this use curly bracket and if you write curly bracket compulsory had to write a return statement
const three = (one, two) => {
  return one + two;
};

// IMPLICIT RETURN => in this you don't need to write return
//ex 1
const four = (num1, num2) => num1 + num2;

console.log(four(4, 4));

//ex 2

const five = (num1, num2) => num1 + num2;

console.log(four(8, 8));

// why we use brackets in ex 2
// if you want to insert the object without "()" brackets you can't add the object for this we use "()"

// ex 3
const six = () => ({ name: "tanmay" });
console.log(six());
