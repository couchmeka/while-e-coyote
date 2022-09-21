const prompt = require('prompt-sync')({sigint: true});

let input = prompt('Enter a string: ');
let str1 = input;

while(input.length <= 10) {
    
    input = input + str1;
    console.log(input);
}
