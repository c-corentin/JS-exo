/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    // var a = document.getElementById("numbers").value
    
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        
        var a = [2, 4, 14, 10, 90, 23, 16]

        function compareNombres (a, b){
           return a - b
            
        }

        alert(a.sort(compareNombres))
    });
})();
