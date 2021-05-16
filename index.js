// Code your solution here
const findMatching = (arrOfDrivers, string) => {
    return arrOfDrivers.filter(driver => {
        if(driver.toUpperCase() === string.toUpperCase()){
            return true;
        }
    })
}

const fuzzyMatch = (arrOfDrivers, string) => {
    return arrOfDrivers.filter(driver => driver[0] === string[0])
};

const matchName = (arrOfDrivers, string) => {
    return arrOfDrivers.filter(driver => driver.name === string)
}