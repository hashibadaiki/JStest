const fizzNumber = 3;
const buzzNumber = 5;
const fizz = "fizz";
const buzz = "buzz";
const fizzbuzz = fizz + buzz;

for (var i = 1; i < 101; i++) {
    if ( i % fizzNumber === 0 && i % buzzNumber === 0) {
        console.log(fizzbuzz);
    } else if ( i % fizzNumber === 0) {
        console.log(fizz);
    } else if ( i % buzzNumber === 0) {
        console.log(buzz);
    } else {
        console.log(i);
        }
    }