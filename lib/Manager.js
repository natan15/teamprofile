const Employee = require("./Employee")

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee{
    constructor(name, id, email){
        super(name, id, email)
        this.officeNumber = this.officeNumber
    }
    getofficeNumber(){
        return this.officeNumber
    }
    getrole(){
        return "Manager"
    }
}
module.exports = Manager
