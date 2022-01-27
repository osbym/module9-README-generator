const fs = require("fs");

const inquirer = require("inquirer");

const generateQuestions = require("./generateQuestions");

// fs.writeFile("log.txt", stringToWriteToFile, function (err) {
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
            validate: title => {
                if (title) {
                    return true;
                } else {
                    console.log("Please enter a project title.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Describe the project:",
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log("Please enter a project description.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "install",
            message: "How can you install this application/software?",
            validate: install => {
                if (install) {
                    return true;
                } else {
                    console.log("Please describe how others can contribute.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "In what way will this application/software be used?",
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log("Please describe how this application/software can be used.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "licenses",
            message: "Which license(s) will this use?",
            choices: 
                [
                    "ISC",
                    "MIT"
                ]
        },
        {
            type: "input",
            name: "contributions",
            message: "How can people contribute to this project?",
            validate: contributions => {
                if (contributions) {
                    return true;
                } else {
                    console.log("Please describe how others can contribute.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Is a test needed for this project?",
            validate: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log("Please describe if this project needs to be tested and how to test.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "username",
            message: "Input Github username:",
            validate: username => {
                if (username) {
                    return true;
                } else {
                    console.log("Please enter a Github username.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Input your Email:",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter an email.");
                    return false;
                }
            }
        },
    ]);
    
}

const init = () => {
    console.log(`
        ===============
        Create a README
        ===============
    `);
    questions()
        .then(data => {
            fs.writeFile('./README.md', generateQuestions(data), err => {
                if (err) throw err;
                console.log(`README has been generated in the "README.md" file.`)
            });
        })
}

init();
// if (err) {
//     return console.log(err);
// }

// console.log("Success!");

// reading - the file must exist
// writing - the file will be created
// overwriting - if you write on a file where data already exists, it will be overwritten