const findTheOldest = function(arr) {
    /*find if yearOfDeath doesnt exist, and create it for today (aliyas solution)
    arr.forEach(x => {
        if("yearOfDeath" in x)
            return 1;
        const currentYear = new Date().getFullYear();
        x.yearOfDeath = currentYear;
    });*/

    //get the oldest age (null coalecence nates solution wow)
    let oldestIndex = 0;
    let ages = arr.map(x => (x.yearOfDeath ?? new Date().getFullYear())-x.yearOfBirth)
    let oldestAge = ages.reduce((oldest,current,index) => {
        if(current>oldest) {
            oldestIndex = index;
            return current;
        }
        return oldest;
    },ages[0]);
    return arr[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
