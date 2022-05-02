const input = require("./modules/input");
const commands = require("./modules/commands");

const run = async () => {
  const inputValues = await input.initalize();
  // Convert and clean commands to array.
  commands.convert(inputValues.commands);
  commands.clean();
};

run();
