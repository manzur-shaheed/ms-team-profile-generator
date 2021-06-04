// Manager class based on Employee (need to import Employee)
const Employee = require('./Employee');

class Manager extends Employee {
    // properties
    role = 'Manager';
    constructor(name, ID, email, role, officeNumber) {
        super(name, ID, email, role);
        this.officeNumber = officeNumber;
    }
    // methods
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// export
module.exports = Manager;