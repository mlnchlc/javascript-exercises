const sumAll = function(begin, end) {
  if (end < begin) 
    [begin, end] = [end, begin];
  if (begin < 0 || !Number.isInteger(begin) || !Number.isInteger(end))
    return "ERROR";
  let sum = 0;
  for (let i = begin; i <= end; i++) {
    sum += i;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
