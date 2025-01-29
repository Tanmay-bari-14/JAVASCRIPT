//for loop
// eq. 1
for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

// eq. 2
for (let i = 0; i <= 10; i++) {
  const element = i;
  //   console.log(element);
}

// eq. 3
for (let i = 1; i <= 10; i++) {
  //   console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// eq. 4 *loop on array using basic loop*

let sports = ["cricket", "football", "baseball"];

for (let i = 0; i < sports.length; i++) {
  const element = sports[i];
  //   console.log(element);
}

// eq. 5 *BREAKS & CONTINUE*

// BREAK => it uses in a loop, working of break statement is to take a break at perticular define position as shown below, after BREAK other code below to the BREAK is not run/work, and loop has ended.

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 8) {
    console.log("8 no. found");
    break;
  }
  console.log(element);
}

//CONTINUE => it uses in a loop, working of CONTINUE statement is to take a stop/skip the define conditional statement at perticular define position as shown below, after CONTINUE other code below to the CONTINUE can run/work and loops continue till the loop end.

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 8) {
    console.log("8 no. found");
    break;
  }
  console.log(element);
}
