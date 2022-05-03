const commands = require("./commands");
const input = [1, "a", 2, 3, 10, 0];
const expectedNumbers = [1, 2, 3, 0];

test("Convert string to numerical array", () => {
  commands.clean(input);
  expect(commands.data).toEqual(expect.arrayContaining(expectedNumbers));
});

test("Remove any digits that is not a valid command", () => {
  commands.clean(input);
  expect(commands.data).toEqual(expect.arrayContaining(expectedNumbers));
});

test("Let fn clean add a final zero if missing", () => {
  commands.data = [1, 2, 3];
  commands.clean(commands.data);
  expect(commands.data).toEqual(expect.arrayContaining([1, 2, 3, 0]));
});
