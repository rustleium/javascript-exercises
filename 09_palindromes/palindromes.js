const palindromes = function (string) {
  let strippedString = string.replace(/[!"#$%&'()*+, -./:;<=>?@[\]^_`{|}~]/g, '')
  .toLowerCase();
  let reversedString = strippedString.split('').reverse().join('');
  return reversedString === strippedString;

};

// Do not edit below this line
module.exports = palindromes;
