'use strict';

module.exports = function(range, value, rangeWidthZeroDefault) {
  if (range[0] != range[1]) {
    return (value - range[0]) / (range[1] - range[0]);
  }
  else {
    return (typeof rangeWidthZeroDefault != "undefined") ? rangeWidthZeroDefault : 0.5
  }
};
