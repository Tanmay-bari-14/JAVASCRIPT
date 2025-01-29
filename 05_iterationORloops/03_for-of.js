const names = ["Tanmay", "Vinod", "Bari", "Dahanu", "Tadiyale"];

for (const name of names) {
  console.log(name);
}

const fullName = "TANMAY VINOD BARI";

for (const fn of fullName) {
  console.log(fn);
}

// forOf not applicable on javascript OBJECTS
const data = {
  firstName: "Tanmay",
  lastName: "Bari",
  age: 21,
};

for (const dt of data) {
  //   console.log(dt);
}
