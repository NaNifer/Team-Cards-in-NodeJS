const Employee = require('./Employee');

class Intern extends Employee{
    constructor(empName,empId,empEmail,school){
        super(empName,empId,empEmail)
        this.school = school
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
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}
module.exports = Intern;



// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'














module.exports = Intern;