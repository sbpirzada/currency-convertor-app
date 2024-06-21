#!/usr/env code
import inquirer from "inquirer";
import chalk from "chalk";
//Print welcome Message
console.log(chalk.bgCyanBright("\n \tWelcome to Shah Bano Pirzada - Currency Convertor CLI Application.\n"));
//Define the list of currenciea and their exchange rate
let exchange_rate = {
    USD: 1, // Base Currency
    EUR: 0.93, // European Currency (Euro)
    JYP: 113, // Japanese Currency (Yen)
    CAD: 1.3, // Canadian Dollar
    AUD: 1.65, // Australian Dollar
    PKR: 280, // Pakistan Rupees
    KWD: 0.31, // Kuwaiti Dinar 
    BHD: 0.38, // Bahraini Dinar
    CHF: 0.92, // Swiss Franc
    GBP: 0.82, // British Pound
};
//Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow.bold.italic("\n \tSelect the currency to convert from:\n"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "KWD", "BHD", "CHF", "GBP"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.blue.bold.italic("\n \tSelect the currency to convert into:\n"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "KWD", "BHD", "CHF", "GBP"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.redBright.bold.italic("Enter the amount to convert:"),
    }
]);
// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of Conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the Converted Amount
console.log(chalk.bgGreenBright.bold.italic(`\n \tConverted amount = ${converted_amount}\n`));
