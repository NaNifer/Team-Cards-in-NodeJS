const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(empName,empId,empEmail,githubUser){
        super(empName,empId,empEmail)
        this.githubUser = githubUser
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
    getGithubUser(){
        return this.githubUser
    }
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer;



// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'