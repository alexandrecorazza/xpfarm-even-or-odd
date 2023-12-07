const evenOrOdd = (number) => {
  if (!Number.isInteger(number)) {
    return false
  } else if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd"
  }
};
  
module.exports = {
  evenOrOdd,
};