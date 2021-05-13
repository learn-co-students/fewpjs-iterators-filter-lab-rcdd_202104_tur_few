// Code your solution here

const driverNames = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"]
const findMatching = (arr, str) => {
  return arr.filter(drivers => drivers.toLowerCase() === str.toLowerCase())
}
console.log(findMatching(driverNames))
findMatching(driverNames)



function fuzzyMatch(arr, str){
    return arr.filter(drivers => drivers[0] === str[0] )
};
fuzzyMatch(driverNames,"bobby")


function matchName(arr, str){
    return arr.filter(drivers =>  drivers.name === str )
};
matchName(driverNames)
