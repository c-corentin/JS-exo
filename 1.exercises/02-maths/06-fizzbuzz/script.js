/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    let a = Math.floor(Math.random() * 100) + 1

    for (let a=1; a <= 100; a++){
        if( a % 3 && a % 5 ) {
            console.log(a);
        } 
        else {
            if( a % 3 == 0 ) {
                console.log("fizz");
            }
            if( a % 5 == 0 ) {
                console.log("buzz");
            }
            if( a % 3 == 0 && a % 5 == 0 ) {
                console.log("fizzbuzz");
            }
        }
    }

    // your code here


