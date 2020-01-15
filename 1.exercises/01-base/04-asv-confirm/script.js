/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var name = ""
    var city = ""
    var sex = ""

    var age = 0

    var name = prompt("Enter your name please.")
    var city = prompt("Fill in your city.")
    var age = prompt("Tell us your age.")
    var sex = prompt("What do you identify as?")

    var conf = confirm('Hello there, ' + name + ', how are you today? Yes we know everything about you, here\'s more info ' + age + ' ' + city + ' ' + sex + '\nIs that true?')

    while (conf == false) {
        var name = prompt("Enter your name please.")
        var city = prompt("Fill in your city.")
        var age = prompt("Tell us your age.")
        var sex = prompt("What do you identify as?")
    
        var conf = confirm('Hello there, ' + name + ', how are you today? Yes we know everything about you, here\'s more info ' + age + ' ' + city + ' ' + sex + '\nIs that true?')
    }
    if (conf == true){
        alert ("That's what we thought")
    }
})();
