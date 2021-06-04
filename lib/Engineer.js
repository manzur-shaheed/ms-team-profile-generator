// Engineer class based on Employee (need to import Employee)
const Employee = require('./Employee');

class Engineer extends Employee {
    // properties
    role = 'Engineer';
    constructor(name, ID, email, role, gitUser) {
        super(name, ID, email, role);
        this.gitUser = gitUser;
    }
    // methods
    getGitUser() {
        return this.gitUser;
    }
}

// export
module.exports = Engineer;