
const managerQuestions = [
{
    message: "Welcome to creating your TEAM - Enter your Team Name:",
    name: "teamName", 
    default: "Google DEV",
  },
{
    message: "Enter Managers Name:",
    name: "name",
    default: "Sergey Brin"
  },
  {
    message: "What is the managers id?",
    name: "id",
    default: "001"
  },
  {
    message: "What is the managers email?",
    name: "email",
    default:"sergey@gmail.com",

    type:"input",

    validate: function(value){
      var data =value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (data) {
        return true;
      } else {
        return "Please enter a valid email address";
      }
    }
    
  },
  {
    message: 'What is the managers office number?',
    name: 'officeNumber',
    default:"650 253 0000",
  }
]
    
const addMember = [
  {
      type: "list",
      message: "Add members to your team ?",
      choices: ['engineer', 'intern', 'NO'],
      name: "memberType"
  }
]
    
const engineerQuestions = [
{
    message: "Enter Engineers Name:",
    name: "name",
    default:"Larry Page"
  },
  {
    message: "What is the engineers id?",
    name: "id",
  },
  {
    message: "What is the engineers email?",
    name: "email",
    default:"larrypage@gmail.com",

  },
  {
    message: "What is engineers Github username?",
    name: "github",
    default:"gitlarrypage"
  }
]
    
const internQuestions = [
{
    message: "Enter Intern's Name:",
    name: "name",
    default:"Anas Qazi"
  },
  {
    message: "What is the intern id?",
    name: "id",
  },
  {
    message: "What is the interns email?",
    name: "email",
    default:"ianasqazi@gmail.com"
  },
  {
    message: 'What is there interns current school?',
    name: 'school',
    default:"University of Toronto"
  },
]



module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  addMember
}