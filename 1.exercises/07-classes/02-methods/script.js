/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener('click',()=>{
        class person {
            constructor(firstName,lastName){
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
            const dude = new person('Pot','Clean');
    
            console.log('Hello, '+dude.firstName + dude.lastName + '!');
            console.log(dude);
        });})();
