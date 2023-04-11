const findTheOldest = function (people) {

    return people.reduce((oldest, curr) => {
        let currAge = getAge(curr.yearOfBirth, curr.yearOfDeath);
        let prevAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        return (prevAge < currAge) ? curr : oldest;
    });
};

function getAge(birth, death) {
    if (!death) {
        return new Date().getFullYear() - birth;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;