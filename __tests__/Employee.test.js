// tests for Employee class
const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it("Testing Employee object", () => {
        // act
        const employee = new Employee();
        // console.log(typeof(employee));
        // assert
        expect(typeof(employee)).toBe("object");
    });

    it("Test employee name property", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.name).toBe(name);
    });

    it("Test employee id property", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);
        // console.log(employee);

        // assert
        expect(employee.id).toBe(id);
    });

    it("Test employee email property", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.email).toBe(email);
    });

    it("Test employee getName() method", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.getName()).toBe(name);
    });

    it("Test employee getId() method", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.getId()).toBe(id);
    });

    it("Test employee getEmail() method", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.getEmail()).toBe(email);
    });

    it("Test employee getRole() method", () => {
        // arrange
        const name = "John";
        const id = 1;
        const email = "john@test.com";
        const role = "Employee";

        // act
        const employee = new Employee(name, id, email);

        // assert
        expect(employee.getRole()).toBe(role);
    });
});