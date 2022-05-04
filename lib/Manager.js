// Child of employee
// officeNumber
// getRole() - overridden to return 'Manager'

const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor( name, id, email, office) {
        super( name, id, email );
        this.office = office;
        this.role = 'Manager';
    };

    getOffice() {
        return this.office;
    };

    getRole() {
        return this.role;
    };
}

module.exports = Manager;