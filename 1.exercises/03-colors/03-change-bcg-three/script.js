/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const hexa= ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
function  random (max) {
return Math.floor(Math.random()*max)
}

document.getElementById("run").addEventListener("click",() => {
    let a = '#'
    for (i=6; i;i--){
         random (hexa)
        a += hexa[ random (hexa.length)]
        }
document.body.style.background = a
});
})();
