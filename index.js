// Code your solution here
// FILTER
// [10, 20, 30, 40].filter(function() {
//   return true;
// }) 
//=> [10, 20, 30, 40] (map, basically)

// [10, 20, 30, 40].filter(function(e) {
//   return e < 30;
// }) 
//=> [10, 20]

// [10, 20, 30, 40].filter(function(e, index) {
//   return index % 2 === 0;
// }) 
//=> [10, 30] (elements with an even-numbered index)

// let arr = [1, 2, 3, 4, 5, 6];
// let even = [];
// for(var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) even.push(arr[i]);
// }
// console.log(even)
// even = [2,4,6]
// -----------------------
// let even = arr.filter(n => {
//     return n % 2 === 0;
//   });
//   // even = [2,4,6]
let driversArray = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

function findMatching(array, name){
    return array.filter(function(driverName){
        return driverName.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(array, name){
    return array.filter(function(driverName){
        return driverName[0] === name[0]
    })
}

function matchName(array, name){
    return array.filter(function(driverName){
        return driverName.name === name
    })
}

