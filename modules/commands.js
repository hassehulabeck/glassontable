module.exports = {
  data: null,
  validCommands: [
    // Could/Should be expanded to include objects with number and definition.
    0, 1, 2, 3, 4,
  ],
  convert: (string) => {
    this.data = string.split(",");
  },
  analyze: () => {
    this.data.forEach((value, index) => {
      if (!this.validCommands.includes(value)) {
        this.data.splice(index, 1);
      }
    });
  },
};
