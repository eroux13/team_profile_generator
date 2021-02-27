const Employee = require("./Employee");

// Manager Child Class
// Import Employee Parent Class
const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(id, officeNumber) {
        this.id = id;
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;