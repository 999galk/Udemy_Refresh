// Question 1: Clean the room function:
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const organizedArr = arr.sort(function(a, b){return a-b});
// [1, 1, 1, 1, 10, 2, 2, 2, 20, 20, 391, 392, 4, 5, 591]

let count = 0;
let finalArr = [];
let filtered = [];
for (i=0;i<organizedArr.length;i=count){
  filtered = organizedArr.filter((item) => item===organizedArr[i]);
  finalArr.push(filtered);
  count += filtered.length;
}

// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const arr1 = [1,"2",4,591,392,391,2,5,10,2,1,"1",1,20,20];

let organizedArr = arr1.sort(function(a, b){return a-b});
const len = organizedArr.length;
for (i=0;i<len;i++){
    if (typeof organizedArr[i] === 'string'){
      organizedArr.push(organizedArr[i]);
      organizedArr[i] = null;
    }
}

const newArr = organizedArr.filter((item => item != null));

let count = 0;
let finalArr = [];
let filtered = [];
for (i=0;i<newArr.length;i=count){
  filtered = newArr.filter((item) => item===newArr[i]);
  finalArr.push(filtered);
  count += filtered.length;
}




dedupArr = arr.map(item => !dedupArr.includes(item));




// Question 2: Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]

const arr = [1,2,3];

let arrForCalc = [];
let foundNumber;
let final = [];
const findThem = (arr,num) => {
  const filteredArr = arr.filter(item => item <= num);
  for(i=0;i<filteredArr.length;i++){
    foundNumber = filteredArr.find(a => a+filteredArr[i] === num);
    if(foundNumber){
      final.push(filteredArr[i], foundNumber);
      break;
    }
  }
  return final.length ? final : 'no such numbers';
}



// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
