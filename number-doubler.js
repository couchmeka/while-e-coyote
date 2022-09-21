const prompt = require('prompt-sync')({sigint: true});

let userPrompt = Number(prompt("Enter a number: "));


while(userPrompt <= 100)
{
    console.log(userPrompt);
    userPrompt= userPrompt * 2;
}


