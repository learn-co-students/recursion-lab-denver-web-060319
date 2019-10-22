// Code your solution here!

function printString(myString) {
    console.log(myString[0]); 
    myString.length > 1 && printString(myString.slice(1));
}

function reverseString(myString, result=''){
    result += myString.slice(myString.length - 1)
    if(myString.length === 1) return result;
    return reverseString(myString.substring(0, myString.length - 1), result)
}

function isPalindrome(myString) {
    if(myString.length <= 1) return true
    if(myString.substring(0,1) !== myString.slice(myString.length - 1)){
        return false
    }
    return isPalindrome(myString.substring(1, myString.length -1))
    
}


function addUpTo(myArray, toIndex, shortArray=[...myArray.slice(0,toIndex+1)], sum=0) {

    if(shortArray.length > 1){
        sum += shortArray.shift()
        return addUpTo(myArray, toIndex, shortArray, sum )   
    }
    else {
        sum += shortArray.shift()
        return sum
    }
}

function maxOf(myArray) {
    if (myArray.length <= 1) return myArray.shift();
    let start= myArray.shift();
    let end = myArray.pop();
    if(start > end)myArray.unshift(start);
    else if(end > start) myArray.unshift(end);
    return maxOf(myArray);
}

function includesNumber(myArray, myNumber) {
    if(myArray.length <= 1) return !!(myArray.shift() === myNumber);
    if(myNumber === myArray.shift()) return true;
    return includesNumber(myArray, myNumber);
}