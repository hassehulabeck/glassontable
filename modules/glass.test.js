const glass = require("./glass");

// Initial values
glass.direction = 0; // North.
glass.position.x = 1;
glass.position.y = 1;

test("Make a turn from north to east", () => {
  glass.turn(1);
  expect(glass.direction).toBe(1);
});

test("Make a turn back to north", () => {
  glass.turn(-1);
  expect(glass.direction).toBe(0);
});

test("Move one step north", () => {
  glass.move("forward");
  expect(glass.position.y).toBe(0);
  expect(glass.position.x).toBe(1);
});

test("Make a turn that makes a jump from back to front of directions array, ie. North to west", () => {
  glass.direction = 0;
  glass.turn(-1);
  expect(glass.direction).toBe(3); // Hårdkodat? Ska jag hellre skriva glass.directions.length - 1?
});

test("Make a turn that jumps from front to back of directions array, ie. West to north", () => {
  glass.direction = 3;
  glass.turn(1);
  expect(glass.direction).toBe(0); // Hårdkodat? Ska jag hellre skriva glass.directions[1]?
});
