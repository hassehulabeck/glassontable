module.exports = {
  data: null,
  validCommands: [0, 1, 2, 3, 4],
  convert: function (string) {
    /* 
      1.Split string to array,
      2. Cast as number
      3. Filter out anything not numerical
      */
    this.data = string
      .split(",")
      .map(Number)
      .filter((x) => !isNaN(x));
  },
  clean: function () {
    // Remove any numbers that isn't a valid command.
    this.data.forEach((value, index) => {
      if (!this.validCommands.includes(value)) {
        this.data.splice(index, 1);
      }
    });

    // Add a final zero if not present
    if (this.data[this.data.length - 1] != 0) this.data.push(0);
  },
};
