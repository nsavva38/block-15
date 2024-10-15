// prompt the user for icecream flavors, and have defaults flavors

// split the string by commas and store in an Array

// create an object

// loop through the array to put the keys in the object, set default key Value

// loop through object and tally

const tally = (newDict, newArray) => {

  for(let i = 0; i < newArray.length; i++){

    newDict[newArray[i]] = 0;
  
  }
  
  for(let i = 0; i < newArray.length; i++){
    
      newDict[newArray[i]] += 1;
  }


  return newDict;

}


const input = prompt(`Enter flavors seperated by commas: `, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

const flavorsArray = input.split(`,`);

let flavorsDict = {};

flavorsDict = tally(flavorsDict, flavorsArray);

for(const key in flavorsDict) {
  console.log(`Flavor: ${key}, Scoops: ${flavorsDict[key]}`);
}