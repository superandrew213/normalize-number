'use strict';

module.exports = (range, value) => {
  return (value - range[0]) / (range[1] - range[0]);
};
