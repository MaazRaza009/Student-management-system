#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("\t\n*************************Welcome to Maaz Raza IT Center*************************\n"));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter Student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled:",
        choices: ["MS.Office",
            "Graphic Designing",
            "Frontend Developer",
            "Backend Developer",
            "Mern-Stack Developer",
            "Full-Stack Developer",
            "Artificial Intelligence (AI)"]
    }
]);
const courseFee = {
    "MS.Office": 2000,
    "Graphic Designing": 2500,
    "Frontend Developer": 3000,
    "Backend Developer": 3000,
    "Mern-Stack Developer": 3500,
    "Full-Stack Developer": 4000,
    "Artificial Intelligence (AI)": 5000
};
console.log(chalk.blue(`Course Fees: ${courseFee[answer.courses]}/-`));
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method:",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`You select Payment Method "${chalk.blueBright(paymentType.payment)}"\n`);
const courseFees = courseFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (courseFees === paymentAmount) {
    console.log(chalk.bold.strikethrough.magentaBright("\tCongratulations, you have purchased this course.\n"));
    console.log((`Student Name: ${chalk.underline(chalk.blackBright(answer.students))}`));
    console.log((`Student ID: ${chalk.underline(chalk.blackBright(randomNumber))}`));
    console.log((`Course: ${chalk.underline(chalk.blackBright(answer.courses))}`));
}
else {
    console.log(chalk.redBright("\tInvalid amount due to course\n"));
}
;
