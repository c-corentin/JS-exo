/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
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
    
    
        console.log(Array.from(document.querySelectorAll("input"))[0].value + "\n" + Array.from(document.querySelectorAll("input"))[1].value) // = console.log(mdpa + "\n" + mdpb)

        if(mdpa === mdpb) {

            alert("Ok c'bon t'peux rentrer.")
        }
        else {

            document.getElementById("pass-one").style.border = "thick solid red"
            document.getElementById("pass-two").style.border = "thick solid red"
        }

    })
})();
