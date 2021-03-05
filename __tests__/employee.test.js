const Employee = require("./../lib/employee.js");

describe("Employee", () => {
    describe("Initilization", () => {
        it("should create an employee with a name, id, and email", () => {
            const employee = new Employee("John", 1, "john@email.com");

            expect(employee.name).toEqual("John");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("john@email.com");
        })
    })
    describe("getName", () => {
        it("should return the employee name", () => {
            const employee = new Employee("John", 1, "john@email.com");

            expect(employee.getName()).toEqual("John");
        })
    })
    describe("getID", () => {
        it("should return employee ID", () => {
            const employee = new Employee("John", 1, "john@email.com");

            expect(employee.getID()).toEqual(1);
        })
    })
    describe("getEmail", () => {
        it("should return employee email", () => {
            const employee = new Employee("John", 1, "john@email.com");

            expect(employee.getEmail()).toEqual("john@email.com");
        })
    })
    describe("getRole", () => {
        it("should return employee role", () => {
            const employee = new Employee("John", 1, "john@email.com");

            expect(employee.getRole()).toEqual("Employee");
        })
    })
})