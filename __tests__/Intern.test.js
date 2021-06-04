// tests for Intern class
const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it("Testing Intern object", () => {
        // act
        const intern = new Intern();
        // assert
        expect(typeof(intern)).toBe("object");
    });
});