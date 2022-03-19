// Dependencies
// const fs = requrie('fs');
const inquirer = require('inquirer');

const EmployeeQuestions = require('./lib/EmployeeQuestions.js');

function init() {
    return inquirer.prompt(EmployeeQuestions)
};

init();