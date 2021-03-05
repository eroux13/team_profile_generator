const Intern = require("./../lib/intern.js");

describe("Intern", () => {
    decribe("Initilization", () => {
        it("should create an intern with a name, id, email, and school", () => {
            const intern = new Intern("EJ", 23, "some@email.com", "UC Davis");

            expect(intern.name).toEqual("EJ");
            expect(intern.id).toEqual(23);
            expect(intern.email).toEqual("some@email.com");
            expect(intern.school).toEqual("UC Davis")
        })
    })
    describe("getSchool", () => {
        it("should return the school the intern attends", () => {
            const intern = new Intern("EJ", 23, "some@email.com", "UC Davis");

            expect(intern.getSchool()).toEqual("UC Davis");
        })
    })
    describe("getRole", () => {
        it("should return intern role", () => {
            const intern = new Intern("EJ", 23, "some@email.com", "UC Davis");

            expect(intern.getRole()).toEqual("Intern");
        })
    })
})