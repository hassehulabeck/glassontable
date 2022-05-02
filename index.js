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
  glass.position.x = Number(inputValues.positionX);
  glass.position.y = Number(inputValues.positionY);

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
    // Check if glass is on table or not
    if (!table.isPositionValid(glass.position)) {
      glass.position.x = -1;
      glass.position.y = -1;
      output();
    }
  });
};

function output() {
  // Write to stdout. Format the output in an array.
  let response = "[" + glass.position.x + ", " + glass.position.y + "]";

  process.stdout.write(response);
  process.exit();
}

run();
