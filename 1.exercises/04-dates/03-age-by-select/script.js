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

    // document.getElementById("run").addEventListener("click",() => {

    // let a = document.getElementById("dob-day").value
    // let b = document.getElementById("dob-month").value
    // let c = document.getElementById("dob-year").value

    // let d = new Date ()
    // let e = d.getMonth ()
    // let f = d.getUTCFullYear ()

    // console.log(a)
    // console.log(b)
    // console.log(c)
    // console.log(d)
    // console.log(e)
    // console.log(f)

    // function age(){
    //     let g = f - c
    // }

    // alert("Vous avez " + g + "ans")

    // })
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
