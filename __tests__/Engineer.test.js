// tests for Engineer class
const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it("Testing Engineer object", () => {
        // act
        const engineer = new Engineer();
        // assert
        expect(typeof(engineer)).toBe("object");
    });
});