// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function Number(n){
    if (n % 2 === 1) {
        console.log("Result of multiplied by two :" , n * 2);
    } else {
        console.log("Result of divided by two :", n / 2);
    }
}

Number(8);

Number(7);


// Similar Practice Task

// 👉 Take a number. If the number is even, multiply it by 5. If the number is odd, add 10 to it and return the result.

function math(num) {
    if (num % 2 === 0) {
        result = num * 5;
        console.log("multiplied the num by 5 : ", result);
    } else if (num % 2 !== 0){
        result = num + 10;
        console.log("added 10 to the num: ", result);
    }
}
math(23);
math(8);