/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // to get the value of an input: document.getElementById("element-id").value
    var a = document.getElementById("op-one")
    var b = document.getElementById("op-two")
    var c = 0

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
         var c = parseInt(a.value) + parseInt(b.value)
        alert(c)
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        var c = a.value - b.value
        alert(c)
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        var c = a.value * b.value
        alert(c)
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        var c = a.value / b.value
        alert(c)
    });
