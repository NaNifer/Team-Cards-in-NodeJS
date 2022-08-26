// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fse = require('fs-extra');
// Library needed for this application
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

let HTMLcards = ""

let htmlPage = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- bootstrap CDN css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <title>Team Profile Generator</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid text-center text-white bg-danger">
        <div class="container">
            <h1 class="display-4">My Team</h1>
            <p class="lead">Meet all the great peeps on our team!</p>
        </div>
    </div>

    ${HTMLcards}
    <!-- boostrap scripts -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <script src="./assets/js/index.js"></script>
</body>

</html>
`

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
    inquirer
        .prompt([
            {
                type: "list",
                name: "addEmpl",
                choices: ["Add Intern", "Add Engineer", "Add Manager", "Exit App"],
                message: "What class of employee would you like ot add to the team?"
            }
        ])
        .then((val) => {
            if (val.addEmpl === "Add Intern") {
                createIntern();
            } else if (val.addEmpl === "Add Engineer") {
                createEngineer();
            } else if (val.addEmpl === "Add Manager") {
                createManager();
            }
        });
}

function createManager() {
    inquirer
        .prompt(managerQuestion)
        .then((val) => {
            const newHireEmp = new Manager(
                val.empName,
                val.empId,
                val.empEmail,
                val.officeNum)
            HTMLcards += `
                <div class="card bg-primary mb-3" id="member-card">
            <div class="card-header bg-primary text-white">
                <h1>${newHireEmp.empName}</h1>
                <h2 class="engineer-role"><img src="">${newHireEmp.getRole()}</h2>
            </div>
            <div class="card-body bg-light text-black">
                <!-- List Group for card content -->
                <ul class="list-group list-group-flush bg-white">
                    <li class="list-group-item">ID: ${newHireEmp.empId}</li>
                    <li class="list-group-item">Email: <a
                            href="mailto:${newHireEmp.empEmail}">${newHireEmp.empEmail}/a></li>
                    <li class="list-group-item"> Office Number: ${newHireEmp.officeNumber}</li>
                </ul>
            </div>
        </div>
                `;
            console.log(HTMLcards, "line 152, create mgr q");
            askEmployeeQuest();
        });
};

function createEngineer() {
    inquirer
        .prompt(engineerQuest)
        .then((val) => {
            const newHireEmp = new Engineer(
                val.empName,
                val.empId,
                val.empEmail,
                val.githubUser)
            HTMLcards += `
                <div class="card bg-primary mb-3" id="member-card">
            <div class="card-header bg-primary text-white">
                <h1>${newHireEmp.empName}</h1>
                <h2 class="engineer-role"><img src="">${newHireEmp.getRole()}</h2>
            </div>
            <div class="card-body bg-light text-black">
                <!-- List Group for card content -->
                <ul class="list-group list-group-flush bg-white">
                    <li class="list-group-item">ID: ${newHireEmp.empId}</li>
                    <li class="list-group-item">Email: <a
                            href="mailto:${newHireEmp.empEmail}">${newHireEmp.empEmail}/a></li>
                    <li class="list-group-item"> Github: <a href="https://github.com/${newHireEmp.githubUser}"</a>
                    </li>
                </ul>
            </div>
        </div>
                `;
            console.log(HTMLcards, "line 184, createEngineer q");

            askEmployeeQuest();
        });
};

function createIntern() {
    inquirer
        .prompt(internQuest)
        .then((val) => {
            const newHireEmp = new Intern(
                val.empName,
                val.empId,
                val.empEmail,
                val.school)
            HTMLcards += `
                <div class="card bg-primary mb-3" id="member-card">
            <div class="card-header bg-primary text-white">
                <h1>${newHireEmp.empName}</h1>
                <h2 class="engineer-role"><img src="">${newHireEmp.getRole()}</h2>
            </div>
            <div class="card-body bg-light text-black">
                <!-- List Group for card content -->
                <ul class="list-group list-group-flush bg-white">
                    <li class="list-group-item">ID: ${newHireEmp.empId}</li>
                    <li class="list-group-item">Email: <a
                            href="mailto:${newHireEmp.empEmail}">${newHireEmp.empEmail}/a></li>
                    <li class="list-group-item"> School: ${newHireEmp.school}</li>
                </ul>
            </div>
        </div>
                `;
                console.log(HTMLcards, "line 216, create intern q");
                askEmployeeQuest();
        });
};

function writeToFile(HTMLcards) {
    fse.writeFile('output/index.html', htmlPage, err => {
        if (err) {
            console.log(err, "line 224, write file");
            return;
        }
        else {
            console.log('File written successfully!');
        }
    });
};

async function init() {
    // Prompt user in command line for manager questions
    await askEmployeeQuest();
    console.log(HTMLcards, "line 236, init after emp q");
    // Start team member prompts if user wants to add team members
    if (HTMLcards.addEmpl === 'Exit App') {
        console.log("line 239, init if statment");
        writeToFile(HTMLcards);
    }
    // Call the write to file function with the data
    console.log("line 243, outside if statement");
};


init();
