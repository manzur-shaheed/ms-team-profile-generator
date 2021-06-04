// tests for Intern class
const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it("Testing Intern object", () => {
        const intern = new Intern();
        expect(typeof(intern)).toBe("object");
    });
});