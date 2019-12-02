const inquirer = require("inquirer");

const fs = require("fs"); // import fs npm library to write file
const util = require("util"); // import util npm library to write file
const writeFileAsync = util.promisify(fs.writeFile);
const path = require("path"); // import path npm library to read relative paths



const {managerQuestions,engineerQuestions,internQuestions,addMember} = require("./questions");

const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

const employeeBody = require("../createHTML");


// var employeeArr = [];
// var managerArr = [];
// var engineerArr = [];
// var internArr = [];

async function employeeData(){
     inquirer
    .prompt(managerQuestions)
    
    
    .then(function(managerQuestions) {

        var newManager = new Manager(managerQuestions.name,managerQuestions.id,managerQuestions.email,managerQuestions.officeNumber);
                  
        var initialContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Sample HTML OUTPUT</title>
        
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    
            <style>
                #employeesInfo{
                    border: 1px solid grey;
                    padding:10px;
                    margin:10px;
                }
            </style>
    
        </head>
        <body>
        
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 test-center">TEAM ${managerQuestions.teamName}</h1>
                <p class="lead">This is a summary of your TEAM</p>
            </div>
        </div>
    
        <div class="container-fluid">
    
            <div class="row">
    
                <div class="col-3" id="employeesInfo">
            
                    <div id="nameRole">
                        <h4>${newManager.name}</h4>
                        <h5>${newManager.role}</h5>
                    </div>
            
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item">ID : ${newManager.id}</li>
                            <li class="list-group-item">Email : ${newManager.email}</li>
                            <li class="list-group-item">Office No : ${newManager.officeNumber}</li>
                        </ul>
                    </div>  
            
                </div>
`;
        
    writeFileAsync(`teamRoaster.html`,initialContent);

        
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
            var lastContent = `
                </div>
            </div>
        
        
            </body>
        </html>
            `;

            fs.appendFileSync('./teamRoaster.html', lastContent);

           
        };
    })
}


async function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then(function(engineerQuestions){
        var newEngineer = new Engineer(engineerQuestions.name,engineerQuestions.id,engineerQuestions.email,engineerQuestions.github)
        // employeeArr.push(newEngineer);
        var engineerDiv= `
        <div class="col-3" id="employeesInfo">
                
            <div id="nameRole">
                    <h4>${newEngineer.name}</h4>
                    <h5>${newEngineer.role}</h5>
                </div>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">ID : ${newEngineer.id}</li>
                        <li class="list-group-item">Email : ${newEngineer.email}</li>
                        <li class="list-group-item">Github : ${newEngineer.github}</li>
                    </ul>
            </div>  
    
        </div>
 `;

        fs.appendFileSync('./teamRoaster.html', engineerDiv);

        addMemberFunc();
    })
}

async function addIntern(){
    inquirer.prompt(internQuestions)
    .then(function(internQuestions){
        var newIntern = new Intern(internQuestions.name,internQuestions.id,internQuestions.email,internQuestions.school)
        var internDiv = `

        <div class="col-3" id="employeesInfo">

            <div id="nameRole">
                <h4>${newIntern.name}</h4>
                <h5>${newIntern.role}</h5>
            </div>

            <div>
                <ul class="list-group">
                    <li class="list-group-item">ID : ${newIntern.id}</li>
                    <li class="list-group-item">Email : ${newIntern.email}</li>
                    <li class="list-group-item">School : ${newIntern.school}</li>
                </ul>
            </div>  
        
        </div>
        `;
        fs.appendFileSync('./teamRoaster.html', internDiv);

        addMemberFunc()
    })
}

module.exports = employeeData;
