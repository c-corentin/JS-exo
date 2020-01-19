/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let a = document.querySelector("#source")
    let b = document.createElement('img')
  
  console.log(a.getAttribute("data-image"))
  
  document.getElementById("target").appendChild(b);
  
  document.querySelector('img').setAttribute("src", a.getAttribute("data-image"));
  
  let c = document.getElementsByTagName("section")
  
  let d = Array.from(c);
  
  console.log(d[1])
  
  d[1].removeChild(d[1].firstElementChild);
})();
