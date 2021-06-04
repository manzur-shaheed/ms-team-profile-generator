// Intern class based on Employee (need to import Employee)
const Employee = require('./Employee');

class Intern extends Employee {
    // properties
    role = 'Intern';
    constructor(name, ID, email, role, school) {
        super(name, ID, email, role);
        this.school = school;
    }
    // methods
    getSchool() {
        return this.school;
    }
}

// export
module.exports = Intern;