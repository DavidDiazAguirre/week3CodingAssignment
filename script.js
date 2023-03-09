//01
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
let ageSubtraction = ages[ages.length - 1] - ages[0];
console.log(ageSubtraction);
/*by using the .length method and subtracting 1, you will always get
the last index of an array, even if new elements are added later on, making the code more dynamic. ages[0] will
always reference the first element of the array.*/

ages.push(23);
let newAgeSubtraction = ages[ages.length - 1] - ages[0];
console.log(newAgeSubtraction);
//added age of 23 with .push. Console will now return 20 from 23-3.

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum / ages.length);
// created sum variable, created for loop to iterate through ages.length, and looped the addition of the current
// sum with the indices.

//02
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let numberOfLetters = 0;

for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    numberOfLetters += currentName.length;
}

const averageLetters = numberOfLetters / names.length;
console.log(averageLetters);
/* first, I created the array 'names' and inserted the names. I then initialized 'numberOfLetters' to hold the character
counts. I created a for loop to iterate through each string in the array, and then initialized a variable, currentName,
so that I could use the .length method on each name in the array. I then add that to my numberOfLetters variable. I
then divide that by the total number of names to get the mean.*/
let allNames = '';
for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    allNames += currentName += ' ';
}
console.log(allNames);
//created variable allNames to hold everything as a string, then iterated through the array, then initialized currentName
//again to draw every string, then had them applied to allNames with spaces after, looping until all names are in the string

//05
const nameLengths = []

for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    nameLengths.push(currentName.length);
}
console.log(nameLengths);
//initialized the nameLengths array, then wrote another for loop to iterate thru the original names array, again
//using currentName to hold the current index that i is at in the loop. then I used the .push method to add the length
//of each string to the nameLengths array

//06
let lengthsSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    let currentNameLength = nameLengths[i];
    lengthsSum += currentNameLength;
}
console.log(lengthsSum);

//same as above but iterating through the new nameLengths array and using the variable currentNameLength to hold
//the total

//07
function wordRepetition (word, n) { //initialize function wordRepetition
    let result = '' //create empty string to hold the results
    for (let i = 0; i < n; i++) { //for loop to iterate n number of times
        result += word; //adds the iteration to the results variable
    }
    return result;
}
console.log(wordRepetition('Hello', 3));

//08
function fullName (firstName, lastName) { //initialized function with the two parameters
    let fullName = firstName + ' ' + lastName; //initialzied the variable fullName to hold firstName and lastName with a space in between
    return fullName;
}
//made a test using my own name as the parameters
console.log(fullName('David', 'Diaz Aguirre'));

//09
function over100 (numbersArray) { //initialized function over100 that takes parameter numbersArray
    let sum = 0; //initialized sum variable
    for (let i = 0; i < numbersArray.length; i++) { //for loop to iterate over the array
        let currentNumber = numbersArray[i]; //creating a way to hold each number in the array per iteration of the loop
        sum += currentNumber; 
    } if (sum > 100) { //conditional to see if it's over 100 or not
        return true;
    } else {
        return false;
    }
}
let numbersArray = [1, 2, 3, 4, 5] //testing the function with a sample array, expected false
console.log(over100 (numbersArray));

//10
function arrayAverage (numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        let currentNumber = numbersArray[i];
        sum += currentNumber;
    }
    return sum / numbersArray.length;
}
console.log(arrayAverage(numbersArray));

//11
function arraySuperiority (array1, array2) { //initialized function arraySuperiority with two array parameters
    let sum1 = 0
    for (let i = 0; i< array1.length; i++) { //iterating thru array, adding all into sum1
        let currentNumber = array1[i];
        sum1 += currentNumber;
    } 
    let sum2 = 0
    for (let i = 0; i < array2.length; i++) { //iterating thru array, adding all into sum2
        let currentNumber = array2[i];
        sum2 += currentNumber
    }
    return sum1 / array1.length > sum2 / array2.length //boolean expression to return whether sum1 is greater than sum 2 or not
}   

array1 = [10, 100, 1000, 10000];
array2 = [20, 200, 2000, 20000];
console.log(arraySuperiority(array1, array2)); //expected outcome: false

//12
function willBuyDrink (isHotOutside, moneyInPocket) { //initialized function willBuyDrink with two parameters
    if (isHotOutside === true && moneyInPocket > 10.50) { //conditional to see if both isHotOutside and moneyInPocket meet criteria
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 10.58)); //expected outcome: true


//13
function alarmClockRing (time) { //this function returns true only if the time is 7:30, would have to be based on a 24-hour clock I think.
    if (time === 7.5) {
        return true;
    } else return false;
}
console.log(alarmClockRing(7)); //expected outcome: false