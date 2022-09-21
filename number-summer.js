const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Pick a number greater than zero(type zero when complete): "));
let sum = 0;


while(num > 0)
{
    sum += num;
    num = Number(prompt("> "));

} 

console.log(sum);