// importing Employee SUPER class
const Employee = require("./employee");

// Manager class Extending Employee class 
class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role="Manager";
    }
    getRole(){
        return this.role;
    };
    getOfficeNumber(){
        return this.officeNumber;
    }
}
module.exports = Manager;