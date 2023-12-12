function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}
// let testArray =[1,2,3,4,5,6]
// console.log(addToZero(testArray))

//Runtime Guess = 0(n2) Because it has a nested loop
//O(1) Space


function hasUniqueChars(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}
// console.log(hasUniqueChars("Monday"));

//Runtime Guess = 0(n2) Because it has a nested loop
//O(1) Space


//I also came across a method that would be an O(n) solution and also seemed to work
//     hasUniqueChars = (str) => {
//     return (new Set(str)).size === str.length;
// } I had to look this one up but i really like the way it works and seems much simpler and overall better for this promblem 



function isPangram(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let char of alphabet) {
        if (str.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

//Runtime Guess = 0(n) Because its just one loop
//O(1) Space


function findLogestWord(arr) {
    let longest = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length
        }
    }
    return longest
}
// console.log(findLogestWord(["Hi", "Hello", "Whats up?", "Howdddddddy", "Yo"]));

//Runtime Guess = 0(n) Because its just a loop again
//O(1) Space