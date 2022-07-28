// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');
const validation = require('./utils/validation');

// Packages needed for this application
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

let HTMLpage = ""

// Parent Constructor class 
const employeeQuestions = [
    {
        type: 'input',
        message: 'Please enter the name of team member',
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
const engineerQuest = employeeQuestions.concat([
    {
        type: 'input',
        message: 'What is their Github user name?',
        name: 'githubUser',
        default: 'koolkid'
    }])

// Intern -- school
const internQuest = employeeQuestions.concat([
    {
        type: 'input',
        message: 'What is the name of their school?',
        name: 'school',
        default: 'UCSF Berkeley'
    }])



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
                type: "rawlist",
                name: "option",
                choice:["Add Intern","Add Engineer","Exit App"],
                message: "What class of employee would you like ot add to the team?"
            }
        ])
        .then(val => {
           
            if (val.option === "Add Intern") {
                createIntern();
            } else if (val.option === "Add Engineer") {
                createEngineer();
            }
            else  {
                this.quit();
            }
        });
}

function createManager() {
    inquirer
        .prompt(managerQuestion)
        .then(val => {
            console.log(val)
            const newHireEmp = new Manager(val.empName, val.empId, val.empEmail, val.officeNum)
            HTMLpage += `
            <div class="card" style="width: 18rem;">
            <div class="card-body bg-primary">
                <h5 class="card-title">${newHireEmp.empName}</h5>
                <h6 class="card-text">${newHireEmp.getRole()}<h6>
                <p class="card-text">ID: ${newHireEmp.empId}</p>
                <p class="card-text">Office Num: ${newHireEmp.officeNumber}</p>
                <a href="mailto:${newHireEmp.empEmail}" class="btn btn-primary">${newHireEmp.empEmail}</a>
            </div>
            </div>
                `;
      askEmployeeQuest();
        });
}



createManager();