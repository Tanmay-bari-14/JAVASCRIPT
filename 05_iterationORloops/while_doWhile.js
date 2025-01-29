//while Loop => same as the for loop, working is same but the syntax is diiferent
// NOTE : satrting of the loop in a FOR loop is inside a loop syntax but in while we need define in a global scope/ outside of the loop

let score = 0;

while (score <= 100) {
  //   console.log(score);
  score++;
}

//WHILE LOOP in array

let data = ["data1", "data2", "data3", "data4", "data5"];
let start = 0;

while (start < data.length) {
  //   console.log(data[start]);
  start++;
}

// DO WHILE LOOP => whatever happend but it runs for the one time

let i = 0;

do {
  console.log(i);
  i++;
} while (i <= 10);
