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