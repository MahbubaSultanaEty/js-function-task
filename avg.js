// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr) {
    // console.log(integers);
    let sum = 0;
    for (let num of integers) {
        // console.log(num);
        sum += num;
        // console.log(sum);
    }
    const avg = sum / integers.length;
    console.log(avg);
}
const integers = [3, 45, 6, 8, 98];
make_avg(integers);



// using for loop
function makeAvg(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        // console.log(nums[i]);
        sum += nums[i];
        // console.log(sum);
    }
    console.log(sum / nums.length);
}

let marks = [84, 76, 76, 89, 87];

makeAvg(marks);
