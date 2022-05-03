const input = require("./modules/input");
const commands = require("./modules/commands");
const table = require("./modules/table");
const glass = require("./modules/glass");

const run = async () => {
  // Get input
  const singleLineInput = await input.initalize();

  // Extract input into table, glass and commands. Put the "rest" in commands.
  let commands = divideInput(singleLineInput);

  // Filter and clean string of commands.
  commands.clean(commands);

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

function divideInput(string) {
  let data = string
    .split(",")
    .map(Number)
    .filter((x) => !isNaN(x));

  if (data.length < 4) {
    // If input is missing, auto-simulate a small table - or a big glass...
    data = [3, 3, 1, 1];
  } else {
    table.size.width = data.shift();
    table.size.height = data.shift();

    glass.position.x = data.shift();
    glass.position.y = data.shift();
  }

  return data;
}

function output() {
  // Write to stdout. Format the output in an array.
  let response = "[" + glass.position.x + ", " + glass.position.y + "]";

  process.stdout.write(response);
  process.exit();
}

run();
