function generate() {
    var txtnum = document.getElementById("txtnum")
    var ans = document.getElementById("ans")

    // testing the recieved values
    // the following is still a string, need a number
    // ans.innerHTML = `Test ${typeof (txtnum.value)} `

    // ans.innerHTML = `Test ${Number(txtnum.value)} `

    // this should do it, and the typeof checks
    // ans.innerHTML = `Test ${typeof (Number(txtnum.value))} `

    // check if there is a value, if not ask to write one
    if (txtnum.value.length == 0) {
        alert('Please write or chose a number before clicking')
    } else {
        // store the value of the times table in order to display
        var counter = 1

        // convert to number, just in case
        counter = Number(counter)

        for (var i = 1; i <= 10; i++) {

            // calculate the times table
            counter = Number(txtnum.value) * i

            // create a new option for every anwser
            var opt = document.createElement('option')

            // set a value, since this is what allows different options, apparently not needed
            // opt.setAttribute('value', i)

            // add the necessary text inside the option tag
            opt.innerText = `${Number(txtnum.value)} x ${i} = ${counter}`

            // add the option tag inside the select tag, since it's the only thing it accepts
            ans.appendChild(opt)
        }
    }
}
// still have some troubles like:
//  - the "write a number above" does not dessapear like in the exemple
//  - if I click the button more than once, it does not erase the already present options it just adds them below
