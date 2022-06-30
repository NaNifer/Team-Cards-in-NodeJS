// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generatePage');
// Packages needed for this application
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');


// Parent Constructor class 
const EmployeeQuestions = [
    {
        type: 'input',
        message: 'Please enter name of team member',
        name: 'empName',
        default: 'Loulou'
    },
    {
        type: 'input',
        message: 'What is their ID number?',
        name: 'empId',
        default: '8675309'
    }, 
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'empEmail',
        default: 'totallycool@yeah.com'
    }
];


//  Sub-class Questions
// Team Manager -- office number
{
    type: 'input',
    message: 'What is their office number?',
    name: 'officeNum',
    default: '42'
}
// Engineer -- gitHub username
{
    type: 'input',
    message: 'What is their Github user name?',
    name: 'githubUser',
    default: 'koolkid'
}
// Intern -- school
{
    type: 'input',
    message: 'What is the name of their school?',
    name: 'school',
    default: 'UCSF Berkeley'
}


// 2 EXAMPLES FOR inquirer prompt
// ================================
// 
// function init() {
//     inquirer
//         .prompt(questions)
//         .then(answers => {
//             writeToFile(answers.fileName, answers);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// };


// askToPlayAgain() {
//     inquirer
//       .prompt([
//         {
//           type: "confirm",
//           name: "choice",
//           message: "Play Again?"
//         }
//       ])
//       .then(val => {
//         // If the user says yes to another game, play again, otherwise quit the game
//         if (val.choice) {
//           this.play();
//         } else {
//           this.quit();
//         }
//       });
//   }

