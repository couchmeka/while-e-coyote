const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number: "));
let firstNum = 0;
let secondNum = 1;
let fib;
let i = 2;


  while (i < num) 
  {
      fib = firstNum + secondNum; // n = 0 + 1
      firstNum = secondNum; // 0 = 1
      secondNum = fib; // 1 = n = 0 + 1
      i = i + 1; // 2 = 2 + 1
  }
  
  

  
  
  console.log(`The ${num}th number of the Fibonacci series is: ${y}`);
  