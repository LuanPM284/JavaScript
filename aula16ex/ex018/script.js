/*

// start an empty array where the inputs will be stored
let num = []
// function to add numbers into the array and display them inside the select element
function addNum() {
    // call the input and save inside variable
    let txtn = document.getElementById("txtn")
    // convert the variable into a number
    let n = Number(txtn.value)
    // recover the element where to display the content
    let sel = document.getElementById("sel")
    // make sure to clean the select for eveytime we display the array
    // else we will have several smaller arrays, there might be better ways to do this
    sel.innerText = ''

    // check if in range and if a value for input
    if (txtn.value.length == 0 || n > 100 || n <= 0) {
        alert("Please write a valid number!")
        // one again I can't see a way to keep the display on, while checking
        for (let i in num) {
            let opt = document.createElement('option')
            opt.text = `The value ${num[i]} was added`
            sel.appendChild(opt)
        }
    } else {
        // I will push the new input value into the array
        num.push(n) // [10]
        // test if the value is well inside
        console.log(num)
        // loop to create a new option for the select and display it 
        for (let i in num) {
            let opt = document.createElement('option')
            opt.text = `The value ${num[i]} was added`
            sel.appendChild(opt)
        }
    }
}
// for the second button where some manipulations with the array numbers
function show() {
    // call the ans element so we I have a place to display
    let ans = document.getElementById("ans")
    // start manipulating the values
    // length
    let len = num.length
    // having trouble displaying this two, will check on solution
    let max = Math.max(num)
    let min = Math.min(num)
    // for the sum some more is nedded I found this, not that hard to understand
    // create a variable for the sum and initialize it
    let sum = 0;
    // iterate over each item in the array
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    // average is total sum divided by the number of elements
    let avg = sum / len
    //  the following is displaying all into the page, but I did in a not so smart way, looking foward to check a better method with the solution
    // create a p element 
    let p = document.createElement('p')
    p.innerHTML = `In total we have, ${len} numbers 
    <br/>
    As max we have ${max}
    <br/>
    As min we have ${min}
    <br/>
    As sum we have ${sum}
    <br/>
    As average we have ${avg}
    <br/>
    `
    ans.appendChild(p)
}

*/
// calling the DOM elements
let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let ans = document.querySelector('div#ans')
// an empty array
let values = []

// a function to check if we have a number n and if it is in range
function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// two paramenters, a number and an array
function inList(n, ar) {
    // we use indexOf to check if the value exists inside the array, it doesn't we get a -1
    // if the value does exist inside we will get something other than -1
    // I had figure this out but not how to implement it
    if (ar.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
// I see now my mistake, I should have as default what I want to happen and only jump to the else if my conditions fail
// I did the opposite and first showed my conditions and then did the action
function add() {
    // if any of these fail I show my alert, but if not I do the code and it will always stay in display
    if (isNum(num.value) && !inList(num.value, values)) {
        // this is to test if both functions work
        // alert('All good')
        // since number not in array, I add the number
        values.push(Number(num.value))
        // a new item is created everytime we click the button a new item is pushed and it's appended to the select;
        // since I'm not updating the page, the new items will stay there
        // I don't neet a loop to create new items, good to know
        let item = document.createElement('option')
        item.text = `Value ${num.value} was added`
        list.appendChild(item)
        // this is here if we add new numbers even after doing the finish(), to clean the output
        ans.innerHTML = ``
    } else {
        // this is to test if both functions work
        alert('Value not valid or already in the array.')
    }
    // small quality of life, erase input box and focus on the input
    num.value = ''
    num.focus()
}

function finish() {
    if (values.length == 0) {
        alert('Please add values before clicking!')
    } else {
        let tot = values.length
        // here we are going to create a max and min, by taking the first value and comparing it with the one coming nect, we change if it satisfies our condition. 

        let max = values[0]
        let min = values[0]
        let sum = 0
        // i have dones this several times, but I never imagined having to redo here since I expected to have a method or function for it =D. Good to know the basics still stand
        for (let pos in values) {
            // we start at 0 and add each value. Kinda straightforward
            sum += values[pos]
            if (values[pos] > max) {
                max = values[pos]
            }
            if (values[pos] < min) {
                min = values[pos]
            }
        }

        let avg = sum / tot

        // this will add to the div the anwsers we need
        ans.innerHTML = ``
        ans.innerHTML += `<p>We have in total ${tot} values added.</p>`
        ans.innerHTML += `<p>The maximun is ${max} for the values added.</p>`
        ans.innerHTML += `<p>The minimun is ${min} for the values added.</p>`
        ans.innerHTML += `<p>The sum is ${sum} for the values added.</p>`
        ans.innerHTML += `<p>The average is ${avg} for the values added.</p>`

    }
}