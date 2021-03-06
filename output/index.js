// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
let badge = ''
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter project title:',
    name: 'title',
},
{
    type: 'input',
    message: 'Describe your project:',
    name: 'description',
},
{
    type: 'input',
    message: 'Make section for table of contents.',
    name: 'table',
},
{
    type: 'input',
    message: 'What did you install?',
    name: 'installation',
},
{
    type: 'input',
    message: 'enter usage data',
    name: 'usage',
},
{
    type: 'list',
    message: 'What License did you use?',
    name: 'license',
    choices: ['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0']
},
{
    type: 'input',
    message: 'Who were the contributors?',
    name: 'contribution',
},
{
    type: 'input',
    message: 'How many tests have you run?',
    name: 'tests',
},
{
    type: 'input',
    message: 'Enter any questions',
    name: 'questions'
}];

// TODO: Create a function to write README file

const generate = (response) => `
# Title
${response.title}
​
${badge}
​
## Description
${response.description} 
​
​
## Table of Contents
${response.table} 
​
​
## What I used to install
${response.installation} 
​
​
## Usage Data
${response.usage} 
​
​
## What license did you use?
${response.license} 
​
​
​
## Who are the Contributors?
${response.contribution} 
​
​
## How many test runs?
${response.tests} 
​
​
## Any questions?
${response.questions}`
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            switch (response.license) {
                case 'MIT License':
                    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
                    break;

                case 'GNU General Public License v3.0':
                    badge = '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)'
                    break;

                case 'Apache License 2.0':
                    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
                    break;

                default:
                    break;
            }

            fs.writeFile("ReadMe2.md", generate({ ...response }), (error) =>
                error ? console.error(error) : console.log('success'))

        })

}

// Function call to initialize app
init();

