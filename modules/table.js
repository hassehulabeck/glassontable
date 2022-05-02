module.exports = {
  size: {
    height: null,
    width: null,
    // Possibility to add property "blocked", an array of x,y-values which indicates part(s) of grid that aren't available.
  },
  isPositionValid: function (position) {
    if (
      position.x < 0 ||
      position.x >= this.size.width ||
      position.y < 0 ||
      position.y >= this.size.height
    ) {
      return false;
    } else {
      return true;
    }
  },
};
