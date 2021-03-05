const Manager = require("./../lib/manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create a manager with a name, id, email, and office number", () => {
            const manager = new Manager("Jane", 2, "jane@email.com", 5555555555);

            expect(manager.name).toEqual("Jane");
            expect(manager.id).toEqual(2);
            expect(manager.email).toEqual("jane@email.com");
            expect(manager.officeNumber).toEqual(5555555555);
        })
    })
    describe("getRole", () => {
        it("should return manager role", () => {
            const manager = new Manager("Jane", 2, "jane@email.com", 5555555555);

            expect(manager.getRole()).toEqual("Manager");
        })
    })
})