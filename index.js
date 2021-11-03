const inquirer = require('inquirer');
const fs = require("fs");



const readMeTemplate = ({ ProjectTitle, Description, TableOfContent, Installation, 
                        Usage, Lisence, Contributing, Tests, Username, Email}) => {
                          
                          ``

                        }




inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'ProjectTitle',
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Enter a table of content.',
      name: 'TableOfContent',
    },
    {
      type: 'input',
      message: 'Describe how to install your project.',
      name: 'Installation',
    },
    {
        type: 'input',
        message: 'Describe how to use your project.',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'Choose a lisence',
        name: 'Lisence',
        choices: [a, b, c, d]
    },
    {
        type: 'input',
        message: 'Add anyone who contributed to this project',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: '',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'Enter your Github Username.',
        name: 'Username',
    },
    {
        type: 'input',
        message: 'Enter your email.',
        name: 'Email',
    },
  ])




.then((answers) => {
    console.log(answers);
    const readMePage = readMeTemplate(answers);
    fs.writeFile('README.md', readMePage, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });
  