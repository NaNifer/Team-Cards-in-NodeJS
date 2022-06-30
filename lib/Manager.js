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
















module.exports = Manager;