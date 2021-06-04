// tests for Manager class
const Manager = require('../lib/Manager');

describe("Manager class", () => {
    it("Testing Manager object", () => {
        // act
        const manager = new Manager();
        // assert
        expect(typeof(manager)).toBe("object");
    });
});