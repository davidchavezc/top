let max = parseInt(prompt('Enter number and so...'));
for (let i = 1; max >= i; i++){
    if( i % 3 === 0 && i % 5 == 0){
        console.log('FizzBuzz');
    }
    else if (i %3 == 0){
        console.log('Fizz');
    }
    else if(i % 5 == 0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }
}