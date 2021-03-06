// tests for Manager class
const Manager = require('../lib/Manager');

describe("Manager class", () => {
    it("Testing Manager object", () => {
        // act
        const manager = new Manager();
        // assert
        expect(typeof(manager)).toBe("object");
    });

    it("Test Manager officeNumber property", () => {
        // arrange
        const name = "Robert";
        const id = 4;
        const email = "rob@test.com";
        const officeNumber = 222;

        // act
        const manager = new Manager(name, id, email, officeNumber);

        // assert
        expect(manager.officeNumber).toBe(officeNumber);
    });

    it("Test Manager getOfficeNumber() method", () => {
        // arrange
        const name = "Robert";
        const id = 4;
        const email = "rob@test.com";
        const officeNumber = 222;

        // act
        const manager = new Manager(name, id, email, officeNumber);

        // assert
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    });

    it("Test Manager getRole() method", () => {
        // arrange
        const name = "Robert";
        const id = 4;
        const email = "rob@test.com";
        const officeNumber = 222;
        const role = "Manager";

        // act
        const manager = new Manager(name, id, email, officeNumber);

        // assert
        expect(manager.getRole()).toBe(role);
    });
});