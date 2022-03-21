// Dependencies
const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

const EngineerQuestions = require('./lib/EngineerQuestions.js');
const InternQuestions = require('./lib/InternQuestions.js');
const ManagerQuestions = require('./lib/ManagerQuestions.js');

const generateHTML = require('./src/generateHTML.js');

// array to contain the team members
let teamArray = [];

// write HTML file
const writeToFile = () => {
    return new Promise ((resolve, reject) => {
        
        fs.writeFile(`./dist/${teamArray[0]}.html`, generateHTML(teamArray), function (err) {
            if(err) {
                reject(err);
                return;
            };
            resolve({
                message: 'File created! HTML file is located in "dist" folder.'
            });
        });
    });
};

//generate HTML
function generateHtmlFile() {
    const html = generateHTML(teamArray);
    writeToFile(html);
};

// add manager to array
function addManager () {
    inquirer.prompt(ManagerQuestions)
    .then( function(data){
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const office = data.office;
        const manager = new Manager(name, id, email, office);

        teamArray.push(manager);

        // populate menu for next course of action.
        addNonManager();
    });
};

// add engineer to array
function addEngineer () {
    inquirer.prompt(EngineerQuestions)
    .then( function(data){
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const github = data.github;
        const engineer = new Engineer(name, id, email, github);

        teamArray.push(engineer);

        // populate menu for next course of action.
        addNonManager();
    });
};

// add intern to array
function addIntern () {
    inquirer.prompt(InternQuestions)
    .then( function(data){
        const name = data.name;
        const id = data.id;
        const email = data.email;
        const school = data.school;
        const intern = new Intern(name, id, email, school);

        teamArray.push(intern);

        // populate menu for next course of action.
        addNonManager();
    });
};

// populate menu for further actions and call function based on user's choice.
function addNonManager() {
    inquirer.prompt( [
        {
            type: 'list',
            name: 'nonManager',
            message: 'Please select an option below.',
            choices: ['Add an Engineer', 'Add an Intern', 'Generate team profile']
        }
    ])
    .then(function(data) {
        switch (data.nonManager) {
            case 'Add an Engineer':
                addEngineer();
                break;
            case 'Add an Intern':
                addIntern();
                break;
            case 'Generate team profile':
                generateHtmlFile();
                console.log(teamArray);
                break;
        };
    });
};

// load on application start
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: "Please input your team's name. (Required)",
            validate: input => {
                if (input) {
                    return true
                }
                else {
                    console.log("Please input your team's name.");
                    return false;
                };
            }
        }
    ])
    .then ( function(data) {
        const teamName = data.teamName;
        teamArray.push(teamName);
        addManager();
    });
};

init();