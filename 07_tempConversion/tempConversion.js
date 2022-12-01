const convertToCelsius = function(tempF) {
  tempC = (5 / 9 * (tempF - 32));
  return Number(tempC.toFixed(1));

};

const convertToFahrenheit = function(tempC) {
  tempF = 9 / 5 * tempC + 32;
  return Number(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
