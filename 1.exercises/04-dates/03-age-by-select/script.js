/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click",() => {

        var a = document.getElementById('dob-year').value

        var b = +new Date(a)
        var ba = new Date()
        var bb = ba.getUTCMonth()
        var bc = ba.getUTCDate()

        var c = (Math.floor((Date.now() - b) / (31557600000)))

        var d = document.getElementById("dob-month").value
        var e = document.getElementById("dob-day").value

        console.log(a)
        console.log(b)
        console.log(ba)
        console.log(bb)
        console.log(bc)
        console.log(c)
        console.log(d)
        console.log(e)

        if (d >= bb && e >= bc ) {
                alert("T'es né en " + a + ", tu as donc " + (c-1) + " ans")
        }
        else {
            alert("T'es né en " + a + ", tu as donc " + c + " ans")
        }
        
})
})();
