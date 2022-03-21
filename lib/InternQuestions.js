const inquirer = require('inquirer');

const InternQuestions = [
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