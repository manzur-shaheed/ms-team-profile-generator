// imports
const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./src/questions");

// import different employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// employee array
const employees = [];

// main function
async function main() {
    // first get manager's details
    inquirer.prompt(questions.managerQuestions)
    .then((data) => {
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.office
        );
        employees.push(manager);
        empMenu();
        console.log(employees);
    })
};

// call main function
main()


