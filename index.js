const input = require("./modules/input");

const run = async () => {
  const inputValues = await input.initalize();
  console.log(inputValues);
};
