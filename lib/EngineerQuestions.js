const inquirer = require('inquirer');

const EngineerQuestions = [
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