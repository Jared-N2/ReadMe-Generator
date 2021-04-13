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
    name: 'Contribution',
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
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            switch (response.license) {
                case 'MIT License':
                    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                    break;

                case 'GNU General Public License v3.0':
                    badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
                    break;

                case 'Apache License 2.0':
                    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                    break;

                default:
                    break;
            }

            let template = (response) => `# Title
            ${response.title}
            \n
           
           ## Description
            ${response.description} 
            \n
           
           ## Table of Contents
            ${response.table} 
            \n
           
           ## What I used to intall
            ${response.installation} 
            \n
           
           ## Usage Data
           ${response.usage} 
           \n
           
           ## What license did you use?
           ${response.license} 
           \n 
           \n
           ${badge}

           ## Who are the Contributors?
           ${response.contribution} 
           \n
           
           ## How many test runs?
           ${response.tests} 
           \n
           
           ## Any questions?
           ${response.questions}`

            // let template = ` # this is the ${response.title} \n \n ${badge} `


            fs.writeFile("ReadMe.md", template, (error) =>
                error ? console.error(error) : console.log('success'))

        })

}


// Function call to initialize app
init();
