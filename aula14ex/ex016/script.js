// a function that is called on button click
/* --- MY VERSION ---
function check() {
    // initiate variables to read the DOM
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var ans = document.getElementById('ans')
    // since I use the variables a lot, I will already converto into numbers
    var startV = Number(start.value)
    var endV = Number(end.value)
    var stepV = Number(step.value)

    ans.innerHTML = 'Counting: <br/>'
    // checking for missing parameters, here the length of the recover input
    if (start.value.length == 0 || end.value.length == 0) {
        ans.innerText = 'No value inserted, please try again'
    } else if (step.value.length == 0) {
        // I will default to 1 since a step of 1 does not make much sense
        alert('The SETP is not allowed. Consider 1 step')
        stepV = 1
        // not happy that I had to repeat the for loop, since it's the only way I could emulate the same as in hte video exemple
        for (startV; startV <= endV + 1; startV += stepV) {
            var element = document.createElement('div')
            element.setAttribute('style', 'display: inline-block;')
            element.innerHTML = `${startV} &#128073;`
            ans.appendChild(element)
        }
        element.innerHTML = `&#127937;`
    } else {
        // the normal behaviour, a start followed by comaring with the end and adding the step at the start
        for (startV; startV <= endV + 1; startV += stepV) {
            // create a new HTML element so we can display it
            var element = document.createElement('div')
            // set attibute in order to have them side by side, as astethic choice, like the exemple
            element.setAttribute('style', 'display: inline-block;')
            // just a hand emoji like exemple
            element.innerHTML = `${startV} &#128073;`
            // the new element goes inside the already existing area for the answer
            ans.appendChild(element)
        }
        // just a flag emoji like exemple
        element.innerHTML = `&#127937;`
    }
}

*/

// SOLUTION
function count() {
    let start = document.getElementById("txtstart")
    let end = document.getElementById("txte")
    let step = document.getElementById("txtstep")
    let ans = document.getElementById("ans")

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        ans.innerHTML = "Impossible to count"
    } else {
        ans.innerHTML = "Counting: "
        let sa = Number(start.value)
        let e = Number(end.value)
        let se = Number(step.value)
        if (se <= 0) {
            // so simple! I can do it outside, instead of a whole if statement with several confliting conditions
            alert("Step invalid, consider number 1")
            se = 1
        }
        // good to check if end is bigger than start, I didn't do that, good point
        if (sa < e) {
            // increasing count
            for (let c = sa; c <= e; c += se) {
                // this is funny, I could just insert directly into ans element, instead of using that I use
                // that is display inline; ans = ans + newLine; works well 
                ans.innerHTML += ` ${c} \u{1F449}`
            }
            ans.innerHTML += `\u{1F3C1}`
        } else {
            // decreasing count
            // another good point is not a sum but substrating, if end smaller than start
            for (let c = sa; c >= e; c -= se) {
                ans.innerHTML += ` ${c} \u{1F449}`
            }
        }
        // for the emojis, unicode emoji list, for unicode U+ types we will wrap with \u{code}
        ans.innerHTML += `\u{1F3C1}`
    }
}