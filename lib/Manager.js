const Employee = require("./Employee")

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
