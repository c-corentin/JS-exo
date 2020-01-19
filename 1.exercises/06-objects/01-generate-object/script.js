/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",() => {


    let craycray = { lastname : "Colart", firstname : "Corentin", age : "24", city : "R'lyeh", country : "Lost in space"}

    console.log(craycray)
    alert(craycray.lastname + "\n" + craycray.firstname + "\n" + craycray.age + "\n" + craycray.city + "\n" + craycray.country)
    
    })
})();
