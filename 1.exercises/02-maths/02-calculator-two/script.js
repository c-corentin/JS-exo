/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    var a = document.getElementById("op-one")
    var b = document.getElementById("op-two")
    var c = 0

    const performOperation = operation => {
        switch(operation){
            case "addition":
                var c = parseInt(a.value) + parseInt(b.value)
                alert(c)
                break

                case "substraction":
                    var c = a.value - b.value
                    alert(c)
                break

                case "multiplication":
                    var c = a.value * b.value
                    alert(c)
                break

                case "division":
                    var c = a.value / b.value
                    alert(c)
                break
        }
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
