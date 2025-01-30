// MAP => is used to do a arithematic calculation in a loop ,,,,, other info same as 07_filter

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const updatedNum = numbers.map((eachNum) => {
  return eachNum + 1;
});

// console.log(updatedNum);

// TRYING conditional Checks => this giving me a boolean value

const holdCondNum = numbers.map((num) => {
  return num > 20;
});

// console.log(holdCondNum);

// using FOR-EACH
// you can store FOR-EACH in a variable to do this use empty array and push the values in it

let anotherUpdatedNumber = [];

numbers.forEach((num) => {
  const newnum = num + 1;
  anotherUpdatedNumber.push(newnum);
});

// console.log(anotherUpdatedNumber);

// ++++++++++++++++++++++++++++++++ chaining of MAP() +++++++++++++++++++++++++++++

// ============== EXPLICIT RETURN ===============
// eq 1
const chianingNum = numbers
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 5;
  });

// console.log(chianingNum);

// eq 2
// chaining with filter also possible

const chainingFilter = numbers
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 5;
  })
  .filter((num) => {
    return num > 500;
  });

// console.log(chainingFilter);

// ===================== IMPLICIT RETURN ==============

const implicitNum = numbers
  .map((num) => num * 5)
  .map((num) => num + 5)
  .filter((num) => num > 500);

  console.log(implicitNum);
  
