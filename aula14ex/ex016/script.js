// a function that is called on button click
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
