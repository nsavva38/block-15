// prompt the user for icecream flavors, and have defaults flavors

// split the string by commas and store in an Array

// create an object

// loop through the array to put the keys in the object, set default key Value

// loop through object and tally



const tally = (newArray) => {

  let newObj = {};

  // creates keys for newObj and sets their values to 0
  for(let i = 0; i < newArray.length; i++){

    newArray[i] = newArray[i].trim().toLowerCase();
    newArray[i] = newArray[i][0].toUpperCase() + newArray[i].slice(1);
    newObj[newArray[i]] = 0;
  
  }
  
  // puts values to the keys
  for(let i = 0; i < newArray.length; i++){
    
    newObj[newArray[i]] += 1;

  }

  return newObj;

}


const input = prompt(`Enter flavors seperated by commas: `, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

const flavorsArray = input.split(`,`);

flavorsObj = tally(flavorsArray);

for(const key in flavorsObj) {
  console.log(`Flavor: ${key}`);
  console.log(`Scoops: ${flavorsObj[key]}`);
  console.log(``);
}