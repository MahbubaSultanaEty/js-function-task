// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(oddEven) {
    console.log(oddEven);
    if (oddEven % 2 === 0) {
        return "Even";
    } else {
        return "odd";
    }
}

console.log(odd_even(45));



let number = 34;
let result = odd_even(number);
console.log(result);


let number2 = 17;
let result2 = odd_even(number2);
console.log(result2);

// similar one
// Write a function that takes a number and returns "Positive" if the number is greater than 0, otherwise return "Negative".

function pos_neg(number) {
    if (number > 0) {
        return "Positive";
    }
    else {
        return "Negaitve";
    }
}
console.log(pos_neg(-4));