const Engineer = require("./../lib/engineer.js");

describe("Engineer", () => {
    decribe("Initilization", () => {
        it("should create an engineer with a name, id, email, and github username", () => {
            const engineer = new Engineer("Krystal", 48, "ktran@yahoo.com", "ktran");

            expect(engineer.name).toEqual("Krystal");
            expect(engineer.id).toEqual(48);
            expect(engineer.email).toEqual("ktran@yahoo.com");
            expect(engineer.github).toEqual("ktran")
        })
    })
    describe("getGithub", () => {
        it("should return engineer github username", () => {
            const engineer = new Engineer("Krystal", 48, "ktran@yahoo.com", "ktran");

            expect(engineer.getGithub()).toEqual("ktran");
        })
    })
    describe("getRole", () => {
        it("should return engineer role", () => {
            const engineer = new Engineer("Krystal", 48, "ktran@yahoo.com", "ktran");

            expect(engineer.getRole()).toEqual("Engineer");
        })
    })
})