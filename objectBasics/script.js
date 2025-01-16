/* Take in an array.
For every even number, it will triple it.
Then it will sum all those even numbers. */

let nums = [1, 2, 3, 4, 5]

function isEven (num) {
    if(num % 2 === 0){
        return true;
    }
}
function triple(num){
    num*=3;
    // console.log(num)
    return num;
}
console.log(nums)
evenNums = nums.filter(isEven);
console.log(evenNums)
tripledEvenNumbers = evenNums.map(triple);
console.log(tripledEvenNumbers)
const sumOfTripledEvenNumbers = tripledEvenNumbers.reduce((total, currentValue) => {
    return total + currentValue;
})
console.log(sumOfTripledEvenNumbers)