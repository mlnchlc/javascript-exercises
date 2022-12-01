const repeatString = function(str, times) {
  if (times < 0)
    return "ERROR"
  let res = "";
  for (let i = 0; i < times; i++) {
    res += str;
  }
  return res;
};

module
// Do not edit below this line
module.exports = repeatString;
