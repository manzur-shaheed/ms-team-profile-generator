// Engineer class based on Employee (need to import Employee)
const Employee = require('./Employee');

class Engineer extends Employee {
    // properties
    constructor(name, id, email, gitUser) {
        super(name, id, email);
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