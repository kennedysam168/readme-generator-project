const inquirer = require('inquirer');
const fs = require("fs");


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'Project title',
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Enter a table of content.',
      name: 'Table of Tontent',
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
        message: '',
        name: 'Lisence',
        choices: []
    },
    {
        type: 'input',
        message: '',
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
