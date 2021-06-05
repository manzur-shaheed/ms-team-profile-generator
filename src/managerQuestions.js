const managerQuestions = [{
    type: "input",
    message: "Please enter team manager's name: ",
    name: "name"
}, {
    type: "input",
    message: "Please enter team manager's ID: ",
    name: "id"
}, {
    type: "input",
    message: "Please enter team manager's email: ",
    name: "email"
}, {
    type: "list",
    message: "Please enter team manager's office number:",
    name: "office"
}];

module.exports = managerQuestions;