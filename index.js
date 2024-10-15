// prompt the user for icecream flavors, and have defaults flavors

// split the string by commas and store in an Array

// create an object

// loop through the array to put the keys in the object, set default key Value

// loop through object and tally



const input = prompt(`Enter flavors seperated by commas: `, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

const flavorsArray = input.split(`,`);

let flavorsDict = {};



for(let i = 0; i < flavorsArray.length; i++){

  flavorsDict[flavorsArray[i]] = 0;

}

for(let i = 0; i < flavorsArray.length; i++){
  
    flavorsDict[flavorsArray[i]] += 1;
}

console.log(flavorsDict);