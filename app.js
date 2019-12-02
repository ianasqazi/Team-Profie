// const managerQuestions = require("./lib/questions") // import function from askQuestions.js file
const employeeData = require("./lib/collectData") // import function from askQuestions.js file

// const inquirer = require("inquirer");


function init(){
    employeeData();
}

init();

module.exports = init;