// const instaUser = new Object(); // singleton object

const instaUser = {};
// console.log(instaUser);

instaUser.name = "tanmay_bari_14";
instaUser.email = "tanmaybari@demo.como";

// console.log(instaUser);

// ++++++++++++++++++++ NESTED OBJECTS ++++++++++++++++++++++++++

const fbUser = {
  username: "Tanmay Bari",
  personalData: {
    age: 21,
    email: "test@test.com",
  },
};

// console.log(fbUser);
// console.log(fbUser.personalData);
// console.log(fbUser.personalData.email);

// +++++++++++++++++++ Objects Merge ++++++++++++++++++++++++++++++

const num = {
  a: 1,
  b: 2,
};
const sum = {
  a: 11,
  b: 22,
};
const tum = {
  a: 1,
  b: 2,
};

// console.log(num, sum, tum);
// console.log(num);
// console.log(sum);
// console.log(tum);

const merge = { ...num, ...sum };
// console.log(merge);

const obj = Object.assign({}, num, sum);
// console.log(obj);

// ==================  =========================

const data = [
  {
    name: "tabmsfa",
    id: 1,
  },
  {
    name: "tabmsfa",
    id: 1,
  },
  {
    name: "tabmsfa",
    id: 1,
  },
];

console.log(data);
console.log(data[0].name);

console.log(Object.keys(instaUser)); //Object.key('object name) gives us the key of the provided object and convert it into an array
console.log(Object.values(instaUser)); //Object.values('object name) gives us the values of the provided object and convert it into an array
console.log(Object.entries(instaUser)); // gives us the key value pair data in array format [key : value]
console.log(instaUser.hasOwnProperty("isLoggedIn")); // checks the objects having a property which we provide

// **************** loop on array using foreach() ******************************
// data.forEach((element) => {
//   console.log(element.name);
// });

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& objects destructuring &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const book = {
  name: "History",
  price: 199,
  publish: 2016,
};

book.name; //we prefer this alsk\o used

const { name: n } = book; //destructor method
console.log(n);
