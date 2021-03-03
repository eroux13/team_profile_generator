// Intern Child Class
// Import Employee Parent Class
const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRold() {
        return "Intern";
    }
}

module.exports = Intern;