/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    
    function randind(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }


    document.getElementById("run").addEventListener("click", () => {

        let randbird = Math.round(Math.random() * (birds.length -1))
        let getadj = Array.from(adjectives) // à placer avant le randadj
        let randadj = Math.round(Math.random() * getadj.length -1)

        console.log(randbird + "\n" + randadj)

        if(birds[randbird].fem == true)
        {
            document.getElementById("target").innerHTML = "La " + birds[randbird].name + " " + getadj[randadj] + "e"
        }
        else
        {
            document.getElementById("target").innerHTML = "Le " + birds[randbird].name + " " + getadj[randadj]
        }
    
    })
})();
