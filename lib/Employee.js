
class Employee {
    constructor(empName, empId, empEmail) {
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
        return "Employee"
    }
}

module.exports = Employee;





// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'