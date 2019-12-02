// Question prompts to create Manager 

const managerQuestions = [
{
    message: "Welcome to creating your TEAM - Enter your Team Name : ",
    name: "teamName", 
    default: "Google DEV",
    type: "input",
    validate: function(value){
      var string = value.match(/^\s*\S+.*/);
      if (string) {
        return true;
      } else {
        return "Please enter a Team Name";
      }
    }
  },
{
    message: "Enter Managers Name : ",
    name: "name",
    default: "Sergey Brin",
    type: "input",
    validate: function(value){
      var string = value.match(/^\s*\S+.*/);
      if (string) {
        return true;
      } else {
        return "Please enter the Manager's name who will be Team Lead";
      }
    }
  },
  {
    message: "What is the Managers employee id ? ",
    name: "id",
    default: "001",
    type: "input",
    validate: function( value ) {
      var valid = !isNaN(parseFloat(value));
      return valid || "Please enter a Number";
    },
  },
  {
    message: "What is the Managers email address ? ",
    name: "email",
    default:"sergey@gmail.com",
    type:"input",
    validate: function(value){
      var data =value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (data) {
        return true;
      } else {
        return "Please enter a VALID email address";
      }
    }
    
  },
  {
    message: "What is the Manager's office number ? ",
    name: 'officeNumber',
    default:"123 456 7890",
    type:"input",
    validate: function(value){
      const phone = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
      if (phone) {
        return true;
      } else {
        return "Please enter a VALID phone number";
      }
    }

  }
]

// Question prompts to add more Members

const addMember = [
  {
      type: "list",
      message: "Add members to your Team ? ",
      choices: ['Engineer', 'Intern', 'NO'],
      name: "title"
  }
]

// Question prompts to create Engineer 

    
const engineerQuestions = [
{
    message: "Enter Engineers Name : ",
    name: "name",
    default:"Larry Page",
    type: "input",
    validate: function(value){
      var string = value.match(/^\s*\S+.*/);
      if (string) {
        return true;
      } else {
        return "Please enter the Engineer's Name";
      }
    }
  },
  {
    message: "What is the Engineers employee id ? ",
    name: "id",
    default: "002",
    type: "input",
    validate: function( value ) {
      var valid = !isNaN(parseFloat(value));
      return valid || "Please enter a Number";
    },

  },
  {
    message: "What is the Engineers email address ? ",
    name: "email",
    default:"larrypage@gmail.com",
    type:"input",
    validate: function(value){
      var data =value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (data) {
        return true;
      } else {
        return "Please enter a VALID email address";
      }
    }

  },
  {
    message: "What is Engineers Github username ? ",
    name: "github",
    default:"gitlarrypage",
    type: "input",
    validate: function(value){
      var string = value.match(/^\s*\S+.*/);
      if (string) {
        return true;
      } else {
        return "Please enter the Engineer's Github username";
      }
    }
  }
]

// Question prompts to create Intern 

    
const internQuestions = [
{
    message: "Enter Intern's Name : ",
    name: "name",
    default:"Anas Qazi",
    type: "input",
    validate: function(value){
      var string = value.match(/^\s*\S+.*/);
      if (string) {
        return true;
      } else {
        return "Please enter a Intern's name";
      }
    }
  },
  {
    message: "What is the Intern's employee id ? ",
    name: "id",
    default: "003",
    type: "input",
    validate: function( value ) {
      var valid = !isNaN(parseFloat(value));
      return valid || "Please enter a Number";
    },

  },
  {
    message: "What is the Intern's email ? ",
    name: "email",
    default:"ianasqazi@gmail.com",
    type:"input",
    validate: function(value){
      var data =value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (data) {
        return true;
      } else {
        return "Please enter a VALID email address";
      }
    }
  },
  {
    message: "What is there Intern's current school / university ? ",
    name: "school", 
    default:"University of Toronto",
    type: "input",
    validate: function(value){
      var string = value.match(/^\s*\S+.*/);
      if (string) {
        return true;
      } else {
        return "Please enter a School/University Name";
      }
    }
  },
]



module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  addMember
}