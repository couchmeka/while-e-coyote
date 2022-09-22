const prompt = require('prompt-sync')({sigint: true});

input1 = Number(prompt("enter a number: "));
input2 = Number(prompt("please enter another number: "));



while (input1 % input2 !==0)
{
    console.log(input1++);
}

console.log(`${input1} is divisible by ${input2}`);
