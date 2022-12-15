const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => { 
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        // if oldest age less than current age return currentPerson as oldest
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};

// function used to get the age of a person
const getAge = function(birth, death) {
    // if person isn't dead yet assign current year to death variable for calculation purposes
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
