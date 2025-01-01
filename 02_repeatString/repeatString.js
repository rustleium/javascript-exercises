const repeatString = function(string, num) {
  let outputString = "";
  if(num < 0) {
    return "ERROR";
  } else {
    for(let count = 1; count <= num; count++){
      outputString += string;
    }
  }
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
