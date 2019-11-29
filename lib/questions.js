
const managerQuestions = [
{
    message: "Welcome to creating your TEAM - Enter your Team Name:",
    name: "teamName"
  },
{
    message: "Enter Managers Name:",
    name: "name"
  },
  {
    message: "What is the managers id?",
    name: "id"
  },
  {
    message: "What is the managers email?",
    name: "email"
  },
  {
    message: 'What is the managers office number?',
    name: 'officeNumber'
  }
]
    
// function addMember(){
  const addMember = [
    {
        type: "list",
        message: "Add members to your team ?",
        choices: ['engineer', 'intern', 'NO',],
        name: "memberType"
    }
  ]
// }
    
const engineerQuestions = [
{
    message: "Enter Engineers Name:",
    name: "name"
  },
  {
    message: "What is the engineers id?",
    name: "id"
  },
  {
    message: "What is the managers email?",
    name: "email"
  },
  {
    message: "What is engineers Github username?",
    name: "github"
  }
]
    
const internQuestions = [
{
    message: "Enter Intern's Name:",
    name: "internName"
  },
  {
    message: "What is the intern id?",
    name: "internId"
  },
  {
    message: "What is the managers email?",
    name: "engineerEmail"
  },
  {
    message: 'What is there interns office number?',
    name: 'internSchool'
  },
]


// module.exports = managerQuestions;
// // module.exports = engineerQuestions;
// // module.exports = internQuestions;
// // module.exports = addMember;

// // module.exports = questions;

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  addMember
}