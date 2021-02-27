// Engineer Child Class
// Import Employee Parent Class
const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(id, github) {
        this.id = id;
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;