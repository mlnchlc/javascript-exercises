const removeFromArray = function (arr, ...rElements) {
  let rSet = new Set(rElements);
  console.log(rSet)
   let res = arr.filter(ele => !rSet.has(ele));
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
