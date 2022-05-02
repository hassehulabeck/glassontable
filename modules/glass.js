module.exports = {
  position: {
    x: null,
    y: null,
  },
  directions: [
    {
      name: "N",
      forward: [0, -1],
      backwards: [0, 1],
    },
    {
      name: "E",
      forward: [1, 0],
      backwards: [-1, 0],
    },
    {
      name: "S",
      forward: [0, 1],
      backwards: [0, -1],
    },
    {
      name: "W",
      forward: [-1, 0],
      backwards: [1, 0],
    },
  ],
  direction: 0, // North as initial value.
  turn: function (turnDirection) {
    // turnDirection is either +1 (clockwise) or -1 (counter-clockwise).
    this.direction = this.direction + turnDirection;

    // Check to see if new value must be corrected.
    if (this.direction < 0) {
      this.direction = this.directions.length - 1;
    }
    if (this.direction >= this.directions.length) {
      this.direction = 0;
    }
  },
  move: function (movement) {
    /*
    In short, in directions you lookup the adjustment of the position by,
    the right direction (0-4 i.e N-E-S-W), then movement(backwards, forward) and 0 for x and 1 for y.
    */
    this.position.x =
      this.position.x + this.directions[this.direction][movement][0];
    this.position.y =
      this.position.y + this.directions[this.direction][movement][1];
  },
};
