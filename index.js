// Code your solution here

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

function findMatching(array,string){
   return array.filter(name => {
       return name.toLowerCase()===string.toLowerCase();
   } )

}


function fuzzyMatch(array, string){
    return array.filter(driver => {return driver[0] === string[0] 
    
    })

};

function matchName(drivers,string){
    return drivers.filter(driver=>{return driver.name===string})


}
