// Code your solution here
let driversArray = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];




function findMatching(array, name){


return array.filter(driverName => { return driverName.toLowerCase() === name.toLowerCase()
}
)
};

function fuzzyMatch(array, name){
    return array.filter(driverName => {return driverName[0] === name[0] })

};

function matchName(array, name){
    return array.filter(driverName => {
        return driverName.name === name
      })

};
