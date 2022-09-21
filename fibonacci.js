const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number: "))
let x = 0;
let y = 1;
let z;
let i = 2;
    while (i < num) {
      z = x + y;
      x = y;
      y = z;
  
      i = i + 1;
    }
  
  

  
  
  console.log(`The ${num}th number of the Fibonacci series is: ${y}`);
  