const inquirer = require("inquirer");
// Node package "inquirer" reads from process.stdin. Can be set in packages/core/index.js #35.

module.exports = {
  initalize: () => {
    const questions = [
      {
        name: "allInfo",
        type: "input",
        message:
          "For a table (3x3) and a glass in the middle, plus some commands (0-4), input 3,3,1,1,4,3,1,0 :",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Enter a string containing at least four values, like this (3,3,1,1):";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
