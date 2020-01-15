/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",()=> {
        let Year= document.getElementById("year").value; //input
        let option = {weekday: "long", year:"numeric",month:"long",day:"numeric"};//organisation date output
        let optionDay ={weekday:"long"}//affiche le jour
    for(month=0;month<=11;month++){
        let friday =new Date(Year,month,13).toLocaleString("fr-BE",option);
        let fridayCompare =new Date(Year,month,13).toLocaleString("fr-BE",optionDay);//recupere le jour
        if(fridayCompare=='vendredi'){//compare les jour a vendredi
            alert ("voici les vendredi 13 de l'année"+" "+Year+" "+"sont : le "+friday)
        }
    }
    })
})();
