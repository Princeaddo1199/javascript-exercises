const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};
findTheOldest( [
    { name: "Micheal Opoku", yearOfBirth: 1990, yearOfDeath: 2030 },
    { name: "Adamu Halima", yearOfBirth: 1999, yearOfDeath: 2060 }
    ])

// Do not edit below this line
module.exports = findTheOldest;
