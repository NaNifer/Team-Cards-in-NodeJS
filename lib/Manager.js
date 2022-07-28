const Employee = require('./Employee');

class Manager extends Employee{
    constructor(empName,empId,empEmail,officeNumber){
        super(empName,empId,empEmail)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager"
    }
}
module.exports = "Manager";


// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'




module.exports = Manager;