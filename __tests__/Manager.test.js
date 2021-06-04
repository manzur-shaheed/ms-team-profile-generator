// tests for Manager class
const Manager = require('../lib/Manager');

describe("Manager class", () => {
    it("Testing Manager object", () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe("object");
    });
});