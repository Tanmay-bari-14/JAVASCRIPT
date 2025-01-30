const statesCode = ["MH", "GJ", "MP", "DL", "TN"];

// eq 1
// Basic function
statesCode.forEach(function (element) {
  // console.log(element);
});

// eq 2
// Arrow function
statesCode.forEach((element) => {
  //   console.log(element);
});

// eq 3
// FOR EACH with the functions parameters
function name(data) {
  //   console.log(data);
}

statesCode.forEach(name);

// eq 4
// FOR EACH containes multiple parameters/values can provide, like => "element" for each value in array, "index" for indexing values from array, "Array" for whole array
statesCode.forEach((element, index, array) => {
  //   console.log(element, index, array);
});

// FOR EACH for multiple objects in a single array in short JSON data

const serverResponse = [
  {
    name: "user1",
    email: "user1@gmail.com",
    city: "MH",
  },
  {
    name: "user2",
    email: "user2@gmail.com",
    city: "GJ",
  },
  {
    name: "user3",
    email: "user3@gmail.com",
    city: "MP",
  },
  {
    name: "user4",
    email: "user4@gmail.com",
    city: "TN",
  },
  {
    name: "user5",
    email: "user5@gmail.com",
    city: "DL",
  },
];

serverResponse.forEach((element) => {
    // console.log(element);
});



//++++++++++++++++++++++++++++++ TIMEPASS (fetching JSON data and try to acces only one object from IT ) ++++++++++++++++++++ 
// let outerCity = "";
// serverResponse.forEach((city) => {
//   if (city == "MH") {
//     outerCity = city;
//   }
// });

// console.log(outerCity);
