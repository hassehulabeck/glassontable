const input = require("./modules/input");
const commands = require("./modules/commands");

const run = async () => {
  const inputValues = await input.initalize();
  // Convert commands to array.
  console.log(inputValues);
  commands.convert(inputValues.commands);
  commands.analyze();
  console.log(commands.data);
};

run();
