#!/usr/bin/env node
import inquirer from "inquirer";
let conversion = {
    PKR: {
        USD: 0.0045,
        GBP: 0.0037,
        PKR: 1,
    },
    USD: {
        PKR: 225.5,
        GBP: 0.83,
        USD: 1,
    },
    GBP: {
        PKR: 1.21,
        USD: 271.79,
        GBP: 1,
    },
};
async function main() {
    const answer = await inquirer.prompt([
        {
            name: "from",
            message: "Select your currency:",
            type: "list",
            choices: ["PKR", "USD", "GBP"],
        },
        {
            name: "to",
            message: "Select your convertion currency:",
            type: "list",
            choices: ["PKR", "USD", "GBP"],
        },
        {
            name: "amount",
            message: "Enter your convertion currency:",
            type: "number",
        },
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = conversion[from][to] * amount;
        console.log(`Your convertion from ${from} to ${to} is ${result}`);
    }
    else {
        console.log("Invalid inputs");
    }
}
main();
