const number = [1, 2, 3];

const reducedFunctionNumber = number.reduce((accumulator, currvalue) => {
    console.log(`accumulator is ${accumulator} and cuurent value is ${currvalue}`);
    
  return accumulator + currvalue;
}, 0 /* this is initial value position */);

// console.log(reducedFunctionNumber);

// ++++++++++++++++++++ reduce function example +++++++++++++++++++++++

const cart = [
    {
        product : "jeans",
        price : 999
    },
    {
        product : "t-shirt",
        price : 399
    },
    {
        product : "shoes",
        price : 1499
    },
    {
        product : "cap",
        price : 299
    },
    {
        product : "jacket",
        price : 1999
    },
]


const total = cart.reduce((acc, curr) => {
    return acc + curr.price
}, 0)

console.log(total);
