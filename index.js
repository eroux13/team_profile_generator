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

// Import HTML & Employee Template
const generateHTML = require("./src/generateHTML.js");
const employeeHTML = require("./src/employeeHTML.js");

// Empty array to push employees into later on
let teamMembers = [];

// Inquirer prompt for user input
const initPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                message: "What is this role for this team member?",
                name: "role",
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: "input",
                message: "What is the name for this team member?",
                name: "name"
            },
            {
                type: "input",
                message: "What is the ID number for this team member?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the email address for this team member?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the office phone number for the manager?",
                name: "officeNumber",
                when: answers => {
                    return answers.role === "Manager"
                }
            },
            {
                type: "input",
                message: "What is the github username for the engineer?",
                name: "github",
                when: answers => {
                    return answers.role === "Engineer"
                }
            },
            {
                type: "input",
                message: "Where does the intern attend school?",
                name: "school",
                when: answers => {
                    return answers.role === "Intern"
                }
            },
            {
                type: "confirm",
                message: "Would you like to add another team member?",
                name: "add"
            }
        ]).then((answers) => {
            teamMembers.push(answers);
            console.log(answers.add);
            if (answers.add) {
                initPrompt();
            }
            else {
                // Set object to contain empty strings
                let teamInfo = {
                    managers: "",
                    engineers: "",
                    interns: ""
                };
                // Loop through the teamMembers list and add respective HTML card depending on employee role
                for (var i = 0; i < teamMembers.length; i++) {
                    let employee = employeeHTML(teamMembers[i]);
                    switch (teamMembers[i].role) {
                        case "Manager":
                            teamInfo.managers += employee;
                            break;
                        case "Engineer":
                            teamInfo.engineers += employee;
                            break;
                        case "Intern":
                            teamInfo.interns += employee;
                            break;
                        default:
                            break;
                    }
                }
                init(teamInfo);
            }
        })
}
// Generate HTML File
const generateHTMLFile = util.promisify(fs.writeFile);
const init = (answers) => {
    generateHTMLFile(`${__dirname}/dist/index.html`, generateHTML(answers))
        .then(() => console.log("Your team has been generated successfully!"))
        .catch((err) => console.error(err))
}

// Start Application
initPrompt();