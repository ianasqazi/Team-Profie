const inquirer = require("inquirer");


const {managerQuestions,engineerQuestions,internQuestions,addMember} = require("./questions");
// const Employee = require ("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

var array = [];

async function employeeData(){
     inquirer
    .prompt(managerQuestions)
    .then(function(managerQuestions) {
          var newManager = new Manager(managerQuestions.name,managerQuestions.id,managerQuestions.email,managerQuestions.officeNumber);
                    console.log(newManager);
                    array.push(newManager);
        })
    .then( function(){
        addMemberFunc();
})
}

async function addMemberFunc(){

    inquirer
    .prompt(addMember)
    .then(function(addMember){
        if(addMember.memberType  === "engineer"){
            addEngineer();
        }
        else if(addMember.memberType === "intern"){
            addIntern();
        }
        else {
            console.log("NO MORE");
            console.log(array);
        };
    })
}


async function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then(function(engineerQuestions){
        var newEngineer = new Engineer(engineerQuestions.name,engineerQuestions.id,engineerQuestions.email,engineerQuestions.github)
        console.log(newEngineer);
        array.push(newEngineer);
        addMemberFunc();
    })
}

async function addIntern(){
    inquirer.prompt(internQuestions)
    .then(function(internQuestions){
        var newIntern = new Intern(internQuestions.name,internQuestions.id,internQuestions.email,internQuestions.school)
        console.log(newIntern);
        array.push(newIntern);
        addMemberFunc()
    })
}

module.exports = employeeData;
