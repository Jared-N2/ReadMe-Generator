// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
`;
}

inquirer.prompt([
  {
      type: 'input',
      section:'Enter project title:',
      name:'title',
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
      type: 'input',
      message: 'What License did you use?',
      name: 'Liscense',
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
  }
  
])

module.exports = generateMarkdown;
