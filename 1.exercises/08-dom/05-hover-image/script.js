/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let a = document.querySelector("img").getAttribute("data-hover")

    document.querySelector('img').addEventListener("mouseover", () => {

        document.querySelector('img').setAttribute("src", a)

        // document.querySelector('img').setAttribute("src", a) -> changement d'attribut
        // demander comment revenir en arrière
    })
})()
