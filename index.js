// Dependencies
// const fs = requrie('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const EmployeeQuestions = require('./lib/EmployeeQuestions.js');
const EngineerQuestions = require('./lib/EngineerQuestions.js');
const InternQuestions = require('./lib/InternQuestions.js');
const ManagerQuestions = require('./lib/ManagerQuestions.js');

// array to contain the team members
let teamArray = [];

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