// Code your solution here

const findMatching = (arr, drivers) => {
                return arr.filter ((string) => {
                                if(string === drivers || string === drivers.toLowerCase() || string === drivers.toUpperCase()) return string = drivers;
                });
};

const fuzzyMatch = (arr, drivers) => {
                return arr.filter ((string) => {
                                for(let i = 0; i < drivers.length; i++){
                                                if(string[i] === drivers[i]) return string = drivers;
                                }
                });
};

const matchName = (arr, drivers) => {
                return arr.filter ((string) => string.name === drivers);
};