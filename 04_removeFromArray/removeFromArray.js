const removeFromArray = function(arr, ...rElements) {

  let res = [];
  let rSet = new Set();
  for (const ele of rElements) {
    rSet.add(ele);
  }
  for (const ele of arr) {
    if (!rSet.has(ele))
      res.push(ele);
  }
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
