// Packages needed for this application
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');



class Employee {
    constructor(empName, id, email) {
        this.empName = empName;
        this.empId = empId;
        this.empEmail = empEmail;
    }
    getEmpName() {
        return this.empName;
    }
    getEmpId() {
        return this.empId;
    }
    getEmail() {
        return this.empEmail;
    }
    getRole() {
        return this.role;
    }
}