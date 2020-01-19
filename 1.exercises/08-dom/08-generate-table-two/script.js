/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let a =  document.getElementById("target")
    
    let creatingTable = document.createElement("table")
    a.appendChild(creatingTable)
    let table = document.querySelector("table")
    
    for (let i=0; i<10; i++) {

        let tableRow = document.createElement("tr")
        let ligne = table.appendChild(tableRow)
        
        for (let l=0; l<10; l++) {

            let tableCol = document.createElement("td")
            ligne.appendChild(tableCol)
            let Multitable = (i+1)*(l+1)
            tableCol.innerHTML = Multitable
        }
        table.appendChild(tableRow)
    }
})()
