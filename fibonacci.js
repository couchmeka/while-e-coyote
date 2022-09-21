const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number: "))
function fibonacci(num) {
    // x is representing the first term,
    // y is representing the second term, and
    // z is representing the sum of x and y.
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
    return y;
  }
  

  answer = fibonacci(num);
  
  console.log(`The ${num}th number of the Fibonacci series is: ${answer}`);
  