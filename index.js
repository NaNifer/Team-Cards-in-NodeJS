// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateHTML = require('./utils/generateHTML');
// const validation = require('./utils/validation');

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


function askEmployeeQuest() {
    console.log("hi");
    inquirer
        .prompt([
            {
                type: "list",
                name: "addEmpl",
                choices:["Add Intern","Add Engineer", "Add Manager", "Exit App"],
                message: "What class of employee would you like ot add to the team?"
            }
        ])
        .then((val) => {
          if (val.addEmpl === "Add Intern") {
                createIntern();
            } else if (val.addEmpl === "Add Engineer") {
                createEngineer();
            }  else if (val.addEmpl === "Add Manager") {
                createManager();
            }
        });
}

function createManager() {
    inquirer
        .prompt(managerQuestion)
        .then((val) => {
            console.log(val)
            const newHireEmp = new Manager(
                val.empName, 
                val.empId, 
                val.empEmail, 
                val.officeNum)
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
};

function createEngineer() {
    inquirer
        .prompt(engineerQuest)
        .then((val) => {
            console.log(val)
            const newHireEmp = new Engineer(
                val.empName, 
                val.empId, 
                val.empEmail, 
                val.githubUser)
            HTMLpage += `
            <div class="card" style="width: 18rem;">
            <div class="card-body bg-primary">
                <h5 class="card-title">${newHireEmp.empName}</h5>
                <h6 class="card-text">${newHireEmp.getRole()}<h6>
                <p class="card-text">ID: ${newHireEmp.empId}</p>
                <p class="card-text">Github: ${newHireEmp.githubUser}</p>
                <a href="mailto:${newHireEmp.empEmail}" class="btn btn-primary">${newHireEmp.empEmail}</a>
            </div>
            </div>
                `;
      askEmployeeQuest();
        });
};

function createIntern() {
    inquirer
        .prompt(internQuest)
        .then((val) => {
            console.log(val)
            const newHireEmp = new Intern(
                val.empName, 
                val.empId, 
                val.empEmail, 
                val.school)
            HTMLpage += `
            <div class="card" style="width: 18rem;">
            <div class="card-body bg-primary">
                <h5 class="card-title">${newHireEmp.empName}</h5>
                <h6 class="card-text">${newHireEmp.getRole()}<h6>
                <p class="card-text">ID: ${newHireEmp.empId}</p>
                <p class="card-text">School: ${newHireEmp.school}</p>
                <a href="mailto:${newHireEmp.empEmail}" class="btn btn-primary">${newHireEmp.empEmail}</a>
            </div>
            </div>
                `;
      askEmployeeQuest();
        });
};


askEmployeeQuest();