// Intern class based on Employee (need to import Employee)
const Employee = require('./Employee');

class Intern extends Employee {
    // properties
    constructor(name, ID, email, school) {
        super(name, ID, email);
        this.school = school;
    }
    // methods
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}    

// export
module.exports = Intern;