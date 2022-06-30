const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(empName,empId,empEmail,githubUser){
        super(empName,empId,empEmail)
        this.githubUser = githubUser
    }

    getGithubUser(){
        return this.githubUser
    }

    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer;