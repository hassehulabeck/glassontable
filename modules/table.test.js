const table = require("./table");

// Initial values
table.size.height = 3;
table.size.width = 3;

let position = {
  x: 2,
  y: 1,
};

test("inner coordinates should return true", () => {
  expect(table.isPositionValid(position)).toBe(true);
});

test("bad coordinates should return false", () => {
  position = {
    x: 2,
    y: -1,
  };
  expect(table.isPositionValid(position)).toBe(false);
});
