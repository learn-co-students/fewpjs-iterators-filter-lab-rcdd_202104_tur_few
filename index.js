// Code your solution here
function findMatching(drivers, target){

  let nameOfDriver = drivers.filter((arrayOfObj) => {
      return arrayOfObj.toLowerCase() === target.toLowerCase();
    })
    return nameOfDriver
  }
  console.log(findMatching(drivers, "Bobby"))
  console.log(findMatching(drivers, "Sammy"))
  console.log(findMatching(drivers, "Susan"))

function fuzzyMatch(drivers, trrget){

let nameOfDriver = drivers.filter((arrayOfObj) => {
   // return arrayOfObj.toLowerCase().startsWith(target);
   return (arrayOfObj.charAt(0) === trrget.charAt(0) && arrayOfObj.charAt(1) === trrget.charAt(1));
  })
  return nameOfDriver
}
console.log(fuzzyMatch(drivers, "Sa"))
console.log(fuzzyMatch(drivers, "y"))
console.log(fuzzyMatch(drivers, "mm"))


function matchName(drivers, target){

  let nameOfDriver = drivers.filter((arrayOfObj) => {
    return arrayOfObj.name === target;
  })
  return nameOfDriver
}
console.log(matchName(drivers, "Bobby"))
console.log(matchName(drivers, "Sammy"))
console.log(matchName(drivers, "Susan"))
