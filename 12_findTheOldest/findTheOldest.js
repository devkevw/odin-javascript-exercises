const findTheOldest = function(people) {
    
    return people.sort(function (a, b) { 
        if (!('yearOfDeath' in a )){a.yearOfDeath = 2024};
        if (!('yearOfDeath' in b )){b.yearOfDeath = 2024};

        return (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) ? 1: -1;
    
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
