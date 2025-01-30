const user = {
  name: "user1",
  age: 50,
  city: "uk",
  gender: "male",
};

// only one variable print the objects keys in the form of strings
for (const key in user) {
  //   console.log(key);
  //   console.log(typeof key);
}

// only one variable in the syntax, print the objects keys in the form of strings

for (const key in user) {
  //   console.log([key]);
  //   console.log(typeof key);
}

// variable with the objects name in printing statement prints the value
for (const key in user) {
  //   console.log(user[key]);
  //   console.log(typeof user[key]);
}

for (const key in user) {
  //   console.log(`${key} is ${user[key]}`);
  //   console.log(typeof user[key]);
}

//+++++++++++++++++++++++++++++++ FOR IN on array +++++++++++++++++++++++++++

const langs = ["marathi", "hindi", "english"];

for (const lang in langs) {
  console.log(lang);
}

for (const lang in langs) {
  console.log(langs[lang]);
}

// NOTE => MAP() is not iterable for "FOR IN"
