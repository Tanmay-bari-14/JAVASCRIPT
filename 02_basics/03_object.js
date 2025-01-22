// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const newSym = Symbol("sym1"); //symbol is can be duplicate but it never gives you same value even it's look same, the reason is symbol

const data = {
  [newSym]: 1022,
  id: 10,
};

console.log(newSym);
console.log(typeof newSym);
console.log(data);
