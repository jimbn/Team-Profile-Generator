const inquirer = require('inquirer');

const ManagerQuestions = [
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