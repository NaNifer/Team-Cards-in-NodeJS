// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generatePage = require('./utils/generatePage');
// Packages needed for this application
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');


// Parent Constructor class 
const employeeQuestions = [
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
const managerQuestion = employeeQuestions.concat([
{
    type: 'input',
    message: 'What is their office number?',
    name: 'officeNum',
    default: '42'
}])

// Engineer -- gitHub 
const engineerQuest = [
{
    type: 'input',
    message: 'What is their Github user name?',
    name: 'githubUser',
    default: 'koolkid'
}]

// Intern -- school

const internQuest = [
{
    type: 'input',
    message: 'What is the name of their school?',
    name: 'school',
    default: 'UCSF Berkeley'
}]



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


function askEmployeeQuest() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Play Again?"
        }
      ])
      .then(val => {
        // If the user says yes to another game, play again, otherwise quit the game
        if (val.choice) {
          this.play();
        } else {
          this.quit();
        }
      });
  }

  function createManager() {
    inquirer
      .prompt(managerQuestion)
      .then(val => {
        // If the user says yes to another game, play again, otherwise quit the game
      console.log(val)
      });
  }

  createManager();