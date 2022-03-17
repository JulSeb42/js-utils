const getFirstName = fullName => {
  let arr = fullName.split(" ");
  return arr[0];
};

module.exports = getFirstName;