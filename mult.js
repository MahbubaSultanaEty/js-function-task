// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function mult(a, b, c, d) {
    const total = a * b * c * d;
    console.log(total);
}

mult(6, 4, 7, 90);


// suimilar task
// Take three parameters. Add all the numbers and multiply the result with 3.

function addMult(a, b, c) {
    return (a * b * c) / 3;
}
console.log(addMult(4, 6, 7));