function filterRange(arr, a, b){
    return arr
    .filter((value) => value >= a && value <=b );
}

arr = [10, 24, 51, 51, 6, 7, 9, 8, 5, 4]
console.log(filterRange(arr, 5, 10))

// Write a function filterRange(arr, a, b)
// that gets an array arr, looks for elements with values higher or equal to a
// and lower or equal to b and return a result as an array.