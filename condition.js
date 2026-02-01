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

Number(7)