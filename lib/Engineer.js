class Engineer extends Employee{
    constructor(name, id, email){
        super(name, id, email)
        this.gitHub = gitHub
    }
    getgitHub(){
        return this.gitHub
    }
    getRole(){
        return "Engineer"
    }
} 
module.exports = Engineer

