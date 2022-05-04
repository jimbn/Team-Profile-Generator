const inquirer = require('inquirer');

const InternQuestions = [
    {
        type:'input',
        name:'name',
        message:"Please provide the intern's name. (Required)",
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
        message:"Please provide the intern's id. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the intern's id.")
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:"Please provide the intern's email. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the intern's email.")
                return false;
            }
        },
    },
    {
        type:'input',
        name:'school',
        message:"Please provide the intern's school. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the intern's school.")
                return false;
            }
        }
    },
    
]

module.exports = InternQuestions;