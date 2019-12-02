const inquirer = require("inquirer");
const open = require('open');

const fs = require("fs"); // import fs npm library to write file
const util = require("util"); // import util npm library to write file
const writeFileAsync = util.promisify(fs.writeFile);
// const path = require("path"); // import path npm library to read relative paths


const {managerQuestions,engineerQuestions,internQuestions,addMember} = require("./questions");

const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");


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
            <script src="https://kit.fontawesome.com/96719df605.js" crossorigin="anonymous"></script>

            <style>
            #employeesInfo{
                border: dotted 2px #FBBC05;
                padding:10px;
                margin:10px;
                background-color:#4285F4;
                color:#FBBC05;
                box-shadow: 2px #FBBC05;
            }

            #employeesInfo:hover{
                border:2px solid #EA4335;
                transition: 1s;
                border-radius: 10%;
            }
            .jumbotron{
                background-color:#FBBC05;
                color:#EA4335;
            }
            body{
                background-color: #34A853;
            }
            .container-fluid{
                width: 100%;
            }
            .row{
                margin:auto;
                justify-content:center;
            }
            </style>
    
        </head>
        <body>
        
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center"><i class="fas fa-users"></i> &nbsp; TEAM ${managerQuestions.teamName} &nbsp; <i class="fas fa-users"></i></h1>
            </div>
        </div>
    
        <div class="container-fluid">
    
            <div class="row">
    
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" id="employeesInfo">
            
                    <div id="nameRole">
                        <h4>${newManager.getName()}</h4>
                        <div class="row"><i class="fas fa-user-secret"></i><p> &nbsp; ${newManager.getRole()}</p></div>
                    </div>
            
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item">ID : ${newManager.getId()}</li>
                            <li class="list-group-item">Email : <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
                            <li class="list-group-item" >Office No : <a href="tel:${newManager.getOfficeNumber()}">${newManager.getOfficeNumber()}</a></li>
                        </ul>
                    </div>  
            
                </div>
`;
    writeFileAsync(`./output/Team_Roaster.html`,initialContent);
    // fs.appendFileSync(`./output/Team_Roaster.html`,initialContent);

        
        })
    .then( function(){
        addMemberFunc();
})
}

async function addMemberFunc(){

    inquirer
    .prompt(addMember)
    .then(function(addMember){
        if(addMember.title  === "Engineer"){
            addEngineer();
        }
        else if(addMember.title === "Intern"){
            addIntern();
        }
        else {
            var lastContent = `
        </div>
        </div>
        
        
    </body>
</html>
            `;

            fs.appendFileSync(`./output/Team_Roaster.html`, lastContent);
            open('./output/Team_Roaster.html');

        };
    })
}


async function addEngineer(){
    inquirer.prompt(engineerQuestions)
    .then(function(engineerQuestions){
        var newEngineer = new Engineer(engineerQuestions.name,engineerQuestions.id,engineerQuestions.email,engineerQuestions.github)
        // employeeArr.push(newEngineer);
        var engineerDiv= `
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" id="employeesInfo">
                
            <div id="nameRole">
                    <h4>${newEngineer.getName()}</h4>
                    <div class="row"><i class="fas fa-glasses"></i><p> &nbsp; ${newEngineer.getRole()}</p></div>
                </div>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">ID : ${newEngineer.getId()}</li>
                        <li class="list-group-item">Email : <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
                        <li class="list-group-item">Github : <a href="https://github.com/${newEngineer.getGithub()}" target="_blank">${newEngineer.getGithub()}</a></li>
                    </ul>
            </div>  
    
        </div>
 `;

        fs.appendFileSync(`./output/Team_Roaster.html`, engineerDiv);

        addMemberFunc();
    })
}

async function addIntern(){
    inquirer.prompt(internQuestions)
    .then(function(internQuestions){
        var newIntern = new Intern(internQuestions.name,internQuestions.id,internQuestions.email,internQuestions.school)
        var internDiv = `

        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" id="employeesInfo">

            <div id="nameRole">
                <h4>${newIntern.getName()}</h4>
                <div class="row"><i class="fas fa-user-graduate"></i><p> &nbsp; ${newIntern.getRole()}</p></div>
            </div>

            <div>
                <ul class="list-group">
                    <li class="list-group-item">ID : ${newIntern.getId()}</li>
                    <li class="list-group-item">Email : <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
                    <li class="list-group-item">School : ${newIntern.getSchool()}</li>
                </ul>
            </div>  
        
        </div>
        `;
        fs.appendFileSync(`./output/Team_Roaster.html`, internDiv);

        addMemberFunc()
    })
}

module.exports = employeeData;
