// Code your solution here
function findMatching (driversArr, string) {
    return driversArr.filter((driver) => { return driver.toLowerCase()  ===  string.toLowerCase()})
}

function fuzzyMatch(driversArr, string){
    return driversArr.filter((driver) => {
        return driver[0] === string[0];
    })
}

function matchName(driversArr, string){
    return driversArr.filter((obj) => { return obj.name == string})
} 
