const inquirer = require("inquirer");

module.exports = {
  initalize: () => {
    const questions = [
      {
        name: "tableHeight",
        type: "input",
        message: "Enter table height:",
        validate: function (value) {
          if (value.length && value > 0) {
            return true;
          } else {
            return "Enter table height:";
          }
        },
      },
      {
        name: "tableWidth",
        type: "input",
        message: "Enter table width:",
        validate: function (value) {
          if (value.length && value > 0) {
            return true;
          } else {
            return "Enter table width:";
          }
        },
      },
      {
        name: "positionX",
        type: "input",
        message: "Enter x position for glass:",
        validate: function (value) {
          if (value.length && value > 0) {
            return true;
          } else {
            return "Enter x position for glass:";
          }
        },
      },
      {
        name: "positionY",
        type: "input",
        message: "Enter y position for glass:",
        validate: function (value) {
          if (value.length && value > 0) {
            return true;
          } else {
            return "Enter x position for glass:";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};