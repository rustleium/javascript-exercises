const findTheOldest = function(people) {
  if(!people || people.length === 0) {
    return null;
  }

  return people.reduce((oldest, current) => {
    let currentAge = (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth;
    let oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;

    return currentAge > oldestAge ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
