// tests for Engineer class
const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it("Testing Engineer object", () => {
        // act
        const engineer = new Engineer();
        // assert
        expect(typeof(engineer)).toBe("object");
    });

    it("Test Engineer gitUser property", () => {
        // arrange
        const name = "Sam";
        const id = 2;
        const email = "sam@test.com";
        const gitUser = "sam.halabi";

        // act
        const engineer = new Engineer(name, id, email, gitUser);

        // assert
        expect(engineer.gitUser).toBe(gitUser);
    });

    it("Test Engineer getGitUser() method", () => {
        // arrange
        const name = "Sam";
        const id = 2;
        const email = "sam@test.com";
        const gitUser = "sam.halabi";

        // act
        const engineer = new Engineer(name, id, email, gitUser);

        // assert
        expect(engineer.getGitUser()).toBe(gitUser);
    });

    it("Test Engineer getRole() method", () => {
        // arrange
        const name = "Sam";
        const id = 2;
        const email = "sam@test.com";
        const gitUser = "sam.halabi";
        const role = "Engineer";

        // act
        const engineer = new Engineer(name, id, email, gitUser);

        // assert
        expect(engineer.getRole()).toBe(role);
    });
});