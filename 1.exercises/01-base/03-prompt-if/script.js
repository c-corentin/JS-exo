/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var gat = prompt("Hey gros t'veux du gâteau ?")
    
    if ( gat == 'Oui'){
        alert("Bien mon gros, mais n'en prends pas trop")
    }

    else if ( gat == 'oui'){
        alert("Bien mon gros, mais n'en prends pas trop")
    }

    else {
        alert("T'vas quand même pas me laisser ça ?! C'est du maison couz'")
    }
})();
