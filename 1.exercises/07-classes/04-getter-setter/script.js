/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person 
    {
        constructor(firstname, lastname)
        {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name()
        {
            return this.firstname + " " + this.lastname
        }
        set name(newFirstName)
        {
            const parts = newFirstName.split(" "); //splits up names accordingly
            this.firstname = parts[0];
	        this.lastname = parts[1];
        }
    }

    document.getElementById("run").addEventListener("click", () =>
    {
        let persa = new Person("Lorem", "Ipsum");

        console.log(persa.name);

        persa.name = "Ameno"
	persa.lastname = "Dudulrime"
	console.log(persa.name)

    });
})();
