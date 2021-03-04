// Require inquirer for user input
const inquirer = require("inquirer");
// Require fs to qrite file
const fs = require("fs");
// Reuire util for promisify
const util = require("util");

// Import object classes
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

// Empty array to push employees into later on
let teamMembers = [];

// Inquirer prompt for user input
const managerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is the team manager's ID number?",
            name: "managerID"
        },
        {
            type: "input",
            message: "What is the team manager's email address?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "managerOfficeNumber"
        }
    ]).then((answers) => {
        const managerName = answers.managerName;
        const managerID = answers.managerID;
        const managerEmail = answers.managerEmail;
        const managerOfficeNumber = answers.managerOfficeNumber;
        const manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumber);
        teamMembers.push(manager);
        addEmployee();
    })
}
const addEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another employee?",
            name: "addEmployee",
            choices: ["Engineer", "Intern", "Exit"]
        }
    ]).then((answers) => {
        switch (answers.addEmployee) {
            case "Engineer":
                engineerPrompt();
                break;

            case "Intern":
                internPrompt();
                break;

            default:
                createTeam();
        }
    })
}
const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "engineerName"
        },
        {
            type: "input",
            message: "What is the engineer's ID number?",
            name: "engineerID"
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is the engineer's github username?",
            name: "engineerGithub"
        }
    ]).then((answers) => {
        const engineerName = answers.engineerName;
        const engineerID = answers.engineerID;
        const engineerEmail = answers.engineerEmail;
        const engineerGithub = answers.engineerGithub;
        const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
        teamMembers.push(engineer);
        addEmployee();
    })
}
const internPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is the intern's ID number?",
            name: "internID"
        },
        {
            type: "input",
            message: "What is the intern's email address?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "Where does the intern attend school?",
            name: "internSchool"
        }
    ]).then((answers) => {
        const internName = answers.internName;
        const internID = answers.internID;
        const internEmail = answers.internEmail;
        const internSchool = answers.internSchool;
        const intern = new Intern(internName, internID, internEmail, internSchool);
        teamMembers.push(intern);
        addEmployee();
    })
}