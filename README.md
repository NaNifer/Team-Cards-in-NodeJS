# Project Name - Team Profile Generator

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Installation](#Installation)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Team Profile Generator is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.


### Installation

1. Create a .gitignore file and include node_modules and .DS store. This ensures that the node_modules directory isn't tracked or uploaded to GitHub.
2. Use the command-line, npm install, to install Inquirer NPM.
3. To start answering questions to create the HTML file, use the command, node app.js in the terminal.

### User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
### Screenshot

The following screenshot demonstrates the application functionality:

![](/public/images/Team_profile-screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/NaNifer/Team-Profile-Generator-h10)

## My process

### Built with

- Semantic HTML5 Markup
- CSS
- JavaScript
- Node.js
- Jest
- Inquirer

### What I learned

I have used a switch statement in the past, but my experience was limited and recallection of ow it worked was weak. For the askEmployeeQuestion function, I refactored my code to include a switch statement which was much easier to read and more explicit of what I wanted it to accomplish:

```js
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
            switch(val.addEmpl) {
                case "Add Intern":
                    createIntern();
                    break;
                case "Add Engineer":
                    createEngineer();
                    break;
                case "Add Manager":
                    createManager();
                    break;
                case "Exit App":
                    exitApp();
                    break;
            }
        });
}
```

## Author

- GitHub - [NaNifer](https://github.com/NaNifer)
- Portfolio - [Nifer Kilakila](https://nanifer.github.io/Nifer-Kilakila-Portfolio-h2/)


## Acknowledgments

Shout out to all the TA's and tutors that helped me along the way. This code took me quite a while to complete from start to finish, and they kept me on target when I was feeling blocked.

A huge shout out to [nullaus](https://github.com/nullaus) who was my quick dial on all the random questions about JS.