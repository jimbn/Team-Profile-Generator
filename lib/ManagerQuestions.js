const inquirer = require('inquirer');

const ManagerQuestions = [
    {
        type:'input',
        name:'name',
        message:"Please provide the manager's name. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the name of the manager.")
                return false;
            }
        }
    },
    {
        type:'number',
        name:'id',
        message:"Please provide the manager's id. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the manager's id.")
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:"Please provide the manager's email. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the manager's email.")
                return false;
            }
        }
    },    
    {
        type:'number',
        name:'office',
        message:"Please provide the manager's office number. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the manager's office number.")
                return false;
            }
        }
    },
    
]

module.exports = ManagerQuestions;