//inquirer version 8.2.4 for collecting user input (In the command line, typed npm init and then typed npm i inquirer@8.2.4
const inquirer = require('inquirer');

//fs for writing to the file system
const fs = require('fs');

//Question prompts in the command line
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter information for installation.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please enter tests.',
        name: 'tests',
    },
    //Choose a license for my application from a list of options
    {
        type: 'list',
        message: 'Please enter usage information.',
        name: 'license',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3'],
    },
  ])
  .then((data) => {
    //Create name of file
    //const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
    let licenseBadge;

    //Select license badge
    switch (data.license) {
        case 'MIT':
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'GPLv2':
            licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            break;
        case 'Apache':
            licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'GPLv3':
            licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
    };

    //String template literals for generating a string version of the readme document before it is written to the file system
    let readmeWrapper = `
# ${data.name}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
If you have additional questions, please email me at ${data.email}.
To see more of my work, find me on GitHub at [${data.username}](https://github.com/${data.username})!
`
    //Function to create readme file and add code
    fs.writeFile('README.md', readmeWrapper, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
