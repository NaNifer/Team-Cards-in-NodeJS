
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