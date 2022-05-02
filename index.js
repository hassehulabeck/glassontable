const input = require("./modules/input");
const commands = require("./modules/commands");
const table = require("./modules/table");
const glass = require("./modules/glass");

const run = async () => {
  // Get input
  const inputValues = await input.initalize();

  // Convert and clean string of commands.
  commands.convert(inputValues.commands);
  commands.clean();

  // Set table size
  table.size.width = inputValues.tableWidth;
  table.size.height = inputValues.tableHeight;

  // Place glass on table
  glass.position.x = inputValues.positionX;
  glass.position.y = inputValues.positionY;

  // Loop through commands, move and turn the glass.
  commands.data.forEach((command) => {
    switch (command) {
      case 0:
        output();
        break;
      case 1:
        glass.move("forward");
        break;
      case 2:
        glass.move("backwards");
        break;
      case 3:
        glass.turn(1);
        break;
      case 4:
        glass.turn(-1);
        break;
      default:
        output();
        break;
    }

    let result = table.isPositionValid(glass.position);
    console.log(result);
  });
};

function output() {
  console.log("Slut");
}
run();
