function findMatching (arr, string) {
    return arr.filter(name => {
      return  name.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(arr, string) {
    return arr.filter(name => {
      return  name[0].toLowerCase() === string[0].toLowerCase()
    })
}


function matchName (arr, string) {
    return arr.filter(driver => {
      return  driver.name === string
    })
}
