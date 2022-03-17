const calculateTotalSum = arr => {
  return arr.map(item => item).reduce((partialSum, a) => partialSum + a, 0);
};

module.exports = calculateTotalSum;