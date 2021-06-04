// tests for Engineer class
const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it("Testing Engineer object", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe("object");
    });
});