// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str) {
    console.log(str);
    strArr = str.split("0");
    console.log(strArr.length- 1);
}

let binary = "01101100";
count_zero(binary);



// Similar Practice Task

// 👉 Write a function that takes a string and counts how many times the letter a appears.

function newStr(count) {
    let arr = count.split("b");
    console.log(arr.length - 1);
}
let sentence = "Ajke jaite dibona , dhodde jabanga ";
newStr(sentence);