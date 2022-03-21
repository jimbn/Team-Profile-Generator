const inquirer = require('inquirer');

const EngineerQuestions = [
    {
        type:'input',
        name:'name',
        message:"Please provide the engineer's name. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the name of the engineer.")
                return false;
            }
        }
    },
    {
        type:'number',
        name:'id',
        message:"Please provide the engineer's id. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the engineer's id.")
                return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:"Please provide the engineer's email. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the engineer's email.")
                return false;
            }
        }
    },    
    {
        type:'input',
        name:'github',
        message:"Please provide the engineer's github username. (Required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please provide the engineer's github username.")
                return false;
            }
        }
    },
    
]

module.exports = EngineerQuestions;