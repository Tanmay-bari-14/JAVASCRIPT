// IIFE (Immediately Invoked Function Expression)

//this is named iife
(function iifeOne() {
  console.log("this is IIFE 1");
})();

//this is un-named iife
(() => {
  console.log("this is IIFE 2");
})();

// injecting para & argu in iffe
// ex 1 normal fn iife
(function para1(name) {
  console.log(name);
})("normal iffe para & argu");

// ex 2 arrow fn iife
((name) => {
  console.log(name);
})("arrow iffe para & argu");
