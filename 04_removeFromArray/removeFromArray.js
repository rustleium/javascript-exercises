const removeFromArray = function (arr, ...elementsToRemove) {

  let resultArray = [];
  for (let element of arr) {

    if (elementsToRemove.includes(element)) {
      continue;
    } else {
      resultArray.push(element);
    }
  };
  return resultArray;
}
// Do not edit below this line
module.exports = removeFromArray;
