const inquirer = require('inquirer');

const EmployeeQuestions = [
    {
        type:'input',
        name:'name',
        message:"Please provide the employee's name. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the name of the employee.")
                return false;
            }
        }
    },
    {
        type:'number',
        name:'id',
        message:"Please provide the employee's id. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the employee's id.")
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:"Please provide the employee's email. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the employee's email.")
                return false;
            }
        }
    }
]

module.exports = EmployeeQuestions;
