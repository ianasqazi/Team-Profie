const Employee = require("./employee");


class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
        this.role="Intern";
    }
    getGithub(){
        return github;
    }
    getRole(){
        return role;
    };
}
module.exports = Intern;