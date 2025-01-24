// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and 
// removes from it all values except those that are between a and b. The test
// is: a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b){
    const filtered = arr.filter(value => value >= a && value <= b);
    // console.log(arr)
    arr.length = 0;
    arr.push(...filtered);
}

let arr = [5, 3, 8, 1]
filterRangeInPlace(arr, 1, 4)
console.log(arr)