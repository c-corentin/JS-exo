/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    Array.from(document.getElementsByTagName("input"))[0].setAttribute("maxlength", 15)

    document.getElementById("pass-one").addEventListener("input", () => {

    let mdp = document.getElementById("pass-one").value
    let number = mdp.match(/[0-9]/g)
    let valid = document.getElementById("validity")

    console.log(mdp)

    if(number.length >1 && mdp.length >= 8) {

        valid.innerHTML = "OK"  
    }

    else {
        valid.innerHTML = "Error"  
    }

})
})()
