// Code your solution here

// function findMatching(sourceArray, string) {

//     string.toUpperCase();

//     let result = sourceArray.filter(function(a) {

//         let upperCased = a.toUpperCase();
        
//         if(upperCased === string) {
//             return true;
//         } 
//         // else if (upperCased)
//     })

//     return result;
// }



function findMatching(sourceArray, string) {

    let regex = new RegExp(`${string}`,"ig");

    let result = sourceArray.filter(function(current) {
        return regex.test(current);
    })

    console.log(result)
    return result;
}


function fuzzyMatch(sourceArray, letters) {
    let regex = new RegExp(`^${letters}`, "i");

    let result = sourceArray.filter(function(string) {
        return regex.test(string);
    })

    console.log(result);
    return result

}

fuzzyMatch(["eee", "ee", "e", "aaa", "aa", "a"], "a")

function matchName(sourceArray, string) {
    let regex = new RegExp(`${string}`, "g");

    let result = sourceArray.filter(function(object) {
        return regex.test(object.name);
    })
    console.log(result);
    return result;
}