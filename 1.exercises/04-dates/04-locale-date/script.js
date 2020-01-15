/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

   let a = new Date ()
   let b = a.getMinutes ()
   let c = a.getHours ()
   let d = a.getFullYear ()
   let e = a.getMonth ()
   let f = a.getDate ()
   let g = a.getDay ()

   let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
   let day = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)
    console.log(g)

    function aff() {
        if ( b < 10){
    document.getElementById("target").innerHTML = "Nous sommes le " + day[a.getDay()] + " " + f + " " + months[a.getMonth()] + " " + d +" " + c + "h" + "0" + b
    }
        else {
            document.getElementById("target").innerHTML = "Nous sommes le " + day[a.getDay()] + " " + f + " " + months[a.getMonth()] + " " + d +" " + c + "h" + b

        }
    }

    setInterval(aff, 1000)

})();
