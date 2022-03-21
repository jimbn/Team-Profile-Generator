// Dependencies
// const fs = requrie('fs');
const inquirer = require('inquirer');

const EmployeeQuestions = require('./lib/EmployeeQuestions.js');
const EngineerQuestions = require('./lib/EngineerQuestions.js');
const InternQuestions = require('./lib/InternQuestions.js');
const ManagerQuestions = require('./lib/ManagerQuestions.js');


function init() {
    return inquirer.prompt(EmployeeQuestions)
        .then((answer) => {
            if(answer.role === 'Engineer') {
                return inquirer.prompt(EngineerQuestions);
            }
            if(answer.role === 'Intern') {
                return inquirer.prompt(InternQuestions);
            }
            if(answer.role === 'Manager') {
                return inquirer.prompt(ManagerQuestions);
            }
        });
};

init();