const fibonacci = function(n) {
  if(typeof n !== 'number') {
    n = parseInt(n, 10);
  }

  if(n < 0) {
    return "OOPS";
  }

  if(n === 0){
    return 0;
  }
  
  if(n === 1) {
    return 1;
  }

  if( n <= 2) {
    return 1;
  }

  let first = 1;
  let second = 1;

  for(let i = 2; i < n; i++) {
    let next = first + second;
    first = second;
    second = next;
  }
  return second;
};

// Do not edit below this line
module.exports = fibonacci;
