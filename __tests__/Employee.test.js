// tests for Employee class
const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it("Testing Employee object", () => {
        const employee = new Employee();
        // console.log(typeof(employee));
        expect(typeof(employee)).toBe("object");
    });
});