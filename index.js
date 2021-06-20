// Code your solution here
function findMatching(drivers, string){
  return drivers.filter(n => {
    return (n.toLowerCase() === string.toLowerCase());
  });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(n => {
    if (string.charAt(0) === n.charAt(0)){
    return n;
    }
  });
}

function matchName(drivers, name){
  return drivers.filter(n => {
    if (n.name == name){
      return n
    }
  })
}


