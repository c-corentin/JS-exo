/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", ()=> {

        let mdpa = Array.from(document.querySelectorAll("input"))[0].value
        let mdpb = Array.from(document.querySelectorAll("input"))[1].value
    
        console.log(Array.from(document.querySelectorAll("input"))[0].value + "\n" + Array.from(document.querySelectorAll("input"))[1].value)

        if(mdpa === mdpb) {

            alert("C'bon t'peux rentrer")
        }
        else {

            document.getElementById("pass-one").setAttribute("class", "error")
            document.getElementById("pass-two").setAttribute("class", "error")
        }

    })
})();
