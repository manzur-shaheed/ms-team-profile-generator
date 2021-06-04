// Engineer class based on Employee (need to import Employee)
const Employee = require('./Employee');

class Engineer extends Employee {
    // properties
    constructor(name, ID, email, gitUser) {
        super(name, ID, email);
        this.gitUser = gitUser;
    }
    // methods
    getGitUser() {
        return this.gitUser;
    }

    getRole() {
        return "Engineer";
    }
}

// export
module.exports = Engineer;