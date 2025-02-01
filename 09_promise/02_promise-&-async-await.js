// sytax first +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const promiseOne = new Promise((resolve, reject) => {
  console.log("promise 1 created");
  resolve();
});

promiseOne.then(() => {
  console.log("promise 1 consumed");
});

// syntax second +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
new Promise((resolve, reject) => {
  console.log("promise 2 created");
  resolve();
}).then(() => {
  console.log("promise 2 consumed");
});
// syntax three +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const promiseThree = new Promise((resolve, reject) => {
  resolve({ username: "testUser", password: 12345678 });
});

promiseThree.then((user) => {
  console.log(user);
});

// syntax four +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const promiseFour = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve({ username: "instaUser", password: 10203040 });
  } else {
    reject("error occured in instragram data fetching");
  }
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise resolved or rejected");
  });


// syntax five "ASYNC AWAIT FUNCTION" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFive = new Promise((resolve, reject) => {
  const err = false;
  if (!err) {
    resolve({ username: "asyncUser", password: 11223344 });
  } else {
    reject("error occured in asyncUser data fetching");
  }
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromiseFive();