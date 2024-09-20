# Curso em Video - JavaScript

# Personnel Notes

## MODULO A
### Aula 01
The basis of web:

Client ( pc, smartphone) x Server ( provides a service (data), video, apps, etc...) => by a browser

Website development :
- HTML : text, images, url, content
- CSS : colors, positions, dimenssions, sizes, prettier
- JavaScript : interactions, configurations, distribution, security, communication

What is JS and how it is used?
- Technology for client side ( for it's start, now it can be server too)
- Who uses? Everyone !!

Some simple code that JS can use to modify an existing webpage( google for the exemple)

```JS
// F12 for dev tools or inspect by using right click

// it will show a pop-up with the message
alert('Hello world')

// it will change the background style color
document.body.style.background = 'black'

// use selecting tool on the logo image to find the name, change to a grayscale
document.querrySelector('img#lnXdpd').style.filter = 'grayscale(100%)'

// same as before, bur hides the logo
document.querrySelector('img#lnXdpd').style.visibility = 'hidden'

// these changes are only for the client, and will be removed once the website is updated (since a current version is called from the server)
```

### Aula 02
Story of how JS was created and how it's important on browsers
ECMA - ECMAScript - default version of JS

### Aula 03
How to learn a programming language?
Books for this classes: 
- JavaScript , O guia definitivo
- JavaScript, O guia do programader
- Mozilla, https://developer.mozilla.org/en-US/docs/Web/JavaScript
- ECMA, https://ecma-international.org/publications-and-standards/standards/ecma-262/

Install:
- Google Chrome 
- VScode
- Node.js

### Aula 04
Building first the scripts 

First time seeing how to modify a webpage, HTML and CSS and first JS small commands (alert, cofirm, prompt)

## MODULO B
### Aula 05
How to comment: 
    
    // for a line

    /* 
    multiple 
    lines  
    */
 
Variables

can be written with letters, `$` or `_`
cannot have numbers at the start or espaces, or reserved words 
It is case sensitive: this != This

```JS
var n1 = 5
var n2 = 4
var n3 = 6

var s1 = "Curso"
var s2 = ' em'
var s3 = `video`
```
Open Node.js, to start messing up with JS is an option to test variables
we write `.exit` to leave the CLI for node

Data Types:
- number
    - Infinity
    - NaN (not a number)
- string
- boolean
- null
- undefinied
- object
    - Array
- function

`typeof variable` can be used to check the type

### Aula 06
Manipulating data

Using the ex002.html we will use `prompt` to store a name inside a variable and show it as an alert

```JS
var name = window.prompt('Your name ?')
alert("Hello, it's a pleasure to meet you " + name)
// concatenation with the '+' 
// but it can also sum with numbers
```

the 'prompt()' gives back a string, in order to sum we will need to convert the datatype

```JS
var n;
// convert variable n to an integer
Number.parseInt(n)
// convert variable n to a float
Number.parseFloat(n)
// convert to a number, let JS find out
Number(n)

var n1 = Number.parseInt(prompt('A number '))
var n2 = parseInt(prompt('Another number '))
var n3 = Number(prompt('Another another number '))
var s = n1 + n2 + n3
alert('The sum is ' + s)

// for a string convertion
String(n)
n.toString()
```
template strings
using ` ` and `${n}` we can use variables directly inside a string instead of using concatenation 

```JS
var s = 'JavaScript'
// get the length of a string
s.length
// convert to uppercase
s.toUpperCase()
// convert to lowercase
s.toLowerCase()

exemple:
    var name = prompt("Please your name : ")
    document.write(`Hello ${name}. Your name has ${name.length} letters`)
    //to use html tags
    document.write(`<h2>Hello ${name}.Your name has ${name.length} letters</h2>`)
    // to jump a line
    document.writeln(`<h2>Your name has ${name.length} letters, on another line</h2>`)
    // a break line tag <br/> can also be used

```
in case we need more than one number after a point we can use,

`name.toFixed(2)` for 2 numbers after the point

we can also replace a dot with a comma 

`name.toFixed(2).replace('.',',')`

we can also use something to show as currency

`n.toLocaleString('pt-BR',(style: 'currency' , currency : 'BRL'))`\
`n.toLocaleString('pt-BR',(style: 'currency' , currency : 'USD'))`\
`n.toLocaleString('pt-BR',(style: 'currency' , currency : 'EUR'))`

### Aula 07
Arythmetic operations

    + addition
    - substraction
    * product
    / division
    % modulo
    ** exponent

Order of operations : PEMDAS () ** * / % + -

For variables attribution

    var a = 5+3 // a recieves 8
    var b = a%5 // b recieves 3
    var c = 5*b**2 // c recieves 45
    var d = 10-a/2 // d recieves 6
    var e = 6*2/d  // e recieves2
    var f = b%e + a/e // f recieves 3
For auto-attribution
    
    var n = 3   => simplification
    n = n + 4   => n+= 4
    n = n - 5   => n-= 5
    n = n * 4   => n*= 4
    n = n / 2   => n/= 2
    n = n ** 2  => n**=2
    n = n % 5   => n%=5

For incrementation

    var x = 5
    x = x + 1   => x++
    x = x - 1   => x--

### Aula 08
Relational operators

    > greater
    < less
    >= greater or equal
    <= less or equal
    == equal 
    != different

exemple

    5 > 2  => true
    7 < 4  => false
    8 >= 8 => true
    9 <= 7 => false
    5 == 5 => true
    4 != 4 => false
    
Identity operator

    == equals 
    === identical

exemple

    5 == 5    => true
    5 == "5"  => true // JS does not test type
    5 === "5" => false // here we use an identical operator, type also checked
    5 === 5   => true
    5 !== 5   => false

Logical operators

    ! not, negation
    && and, conjunction
    || or, disjunction
    
exemple

    negation
    !true  => false
    !false => true

    conjuntion
    true  && true  => true
    true  && false => false
    false && true  => false
    false && false => false

    disjunction
    true  && true  => true
    true  && false => true
    false && true  => true
    false && false => false

Order of operations

    PEMDAS
    > < >= ...
    ! && ||

Ternary operator

    ? : 
    test ? true : false
    
## MODULO C
### Aula 09
DOM : Documen Object Model
parents and childs 
DOM tree:
        -- location
windows -- document -- html -- head -- meta
        -- history          -       -- title
                            -
                            -- body -- h1
                                    -- p
                                    -- p -- strong
                                    -- div
                            
We call those objects values using JS

```JS
// it writes on the page what is inside the parantheses
window.document.write("")

// it will show the charset, set of characters
window.document.write(window.document.charset)

// it will show the type of app it is running as the navigator
window.document.write(window.navigator.appName)

// it will show the current URL
window.document.write(window.document.URL)

```
How to access the DOM

By tag
```JS
// create a variable and chose by tag name, p, the first of the p so 0th element 
var p1 = document.getElementsByTagName('p')[0]

// for the second element
var p1 = document.getElementsByTagName('p')[1]

// we can show it by using .write and also .innerText, that takes the text from the tag
window.document.write(p1.innerText)

// if we use innerText no formatting done inside is taken, for that innerHTML is nedded
window.document.write(p1.innerHTML)

// since we have a variale we can modify it, for exemple the style and color
p1.style.color = "blue"
```

By Id or #

```JS
// notice the element and not elements, so unique
document.getElementById()
```
By name

```JS
// notice the elements and not element, so can select multiples and must be specified with []
document.getElementsByName()
```

By class or .
```JS
document.getElementsByClassName()
```
By selector, by CSS elements

```JS
// we must specify the place it will modify or take from a #forIds and .forClasses

document.querrySelector()
// as an exemple : document.querySelector('div#msg'); a div with an id of 'msg'

document.querrySelectorAll()
```

### Aula 10
DOM Events
https://developer.mozilla.org/en-US/docs/Web/Events
Events are anything that can happen with an element

exe: mouse movements

    mouseenter - enters an element
    mousemove - moves inside an element
    mousedown - mouse moves down
    mouseup - mouse moves up
    click - a mouse click
    mouseout - mouse leaves the element

functions in order to do something once an event happens

we can use onclick() inside a tag in order to initiate an action
```JS
function action {

}
```
We can add different functions that will act once a certain action is taken, we use that inside the tags

But it can get very convouted inside a tag, for that we better use an `eventListener`

```JS

document.addEventListener('DOM EVENT', function)
exemple: 
var a = document.getElementById('id')
a.addEventListener('click', colorChange)

function colorChange(){
    a.style.background = "red"
}
```
A smaller exemple of what we can do
```HTML
<body>
    <h1>Adding Numbers</h1>
    <input type="number" name="txtn1" id="txtn1"> +
    <input type="number" name="txtn2" id="txtn2">
    <input type="button" value="Sum" onclick="sum()">
    <div id="ans">Answer</div>
    <script>
        function sum() {
            // recieves the values from bu DOM inputs
            var tn1 = document.getElementById('txtn1')
            var tn2 = document.querySelector('input#txtn2')
            var ans = document.querySelector('div#ans')
            // save the data as an int or float of the value recieved above
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 + n2
            ans.innerHTML = `The sum of ${n1} and ${n2} is <strong>${s}</strong>`
        }
    </script>
</body>
```

## MODULO D
### Aula 11
Conditions

Sequencial code, it's executed line by line

```JS
// one condition
if (condition){
    action
}

// two conditions
if(condition){
    action
}else{
    other action
}

// several conditions
if(condition){
    action  
}else if(other condition){
    other action
}else if(other other condition){
    other other action
}...else{
    last action
}
```

### Aula 12
Conditions

Nested conditions

```JS
if(condition){
    action 1
} else {
    if(condition 2){
        action 2
    } else{
        action 3
    }
}
```
exe:

```JS
// F8 for execute
var age = 22
if (age < 16) {
    console.log('Does not vote')
} else {
    // console.log('Votes')
    if (age < 18 || age > 65) {
        console.log('Vote is optional')
    } else if (age >= 18) {
        console.log("Can Vote")
    }
}
```
exe:

```JS
// fixed hour
// var hour = 23
// the time now, using the Date() method
var now = new Date()
var hour = now.getHours()
console.log(`Now are ${hour} hours`)
if (hour < 12) {
    console.log('Good Morning')
} else if (hour < 18) {
    console.log('Good afternoon')
} else {
    console.log('Good Evening')
}

```

Multiple conditions, `switch`

```JS
// break is neede so we end the switch or we would keep looping the cases
switch(expression){
    case value 1:
        action
        break
    case value 2:
        action
        break
    case value 3:
        acction
        break
    default:
        deafultAction
        break
}
```

### Aula 12ex
Exercices

The following are simple exercices that will test the already seem points.

First a model of the website presentation is created in order to be more visually appealling and easier to read.

We create:
- model.html
- styles.css
- script.js


> Ex1: website changes image and background color depending on time(hour) of the system or the time chosen

We start by dupliating the model files inside a directory in order to have a common bases

The website: Freepik https://fr.freepik.com/ was used for free open-source images, another option is Pexels https://www.pexels.com/fr-fr/

Here is the JS code with comments on important parts:

```JS
// var photo = document.getElementById("photo")
function load() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("image")
    var date = new Date()
    var hours = date.getHours()
    msg.innerHTML = `Now are ${hours} hours.`
    var bd = document.querySelector('body')
    // or I could directly chose the body to change inside the document, since it is a parent element on the dom
    // document.body.style.background = "color"
    /*
    var hours = 8 // morning
    var hours = 15 // noon
    var hours = 20 // evening
    */
    if (hours >= 0 && hours < 12) {
        // morning
        img.src = 'morning.png'
        bd.style.background = 'lightgoldenrodyellow'
    } else if (hours >= 12 && hours < 18) {
        // afternoon
        img.src = 'afternoon.png'
        bd.style.background = 'lightcoral'
    } else {
        // good evening
        img.src = 'nigth.png'
        bd.style.background = 'midnightblue'
    }
}

```
---
> Ex2: website changes depending on the used given data, a different image is presented together with it's age

Here is the JS code with comments on important parts:
```JS
function check() {
    var date = new Date()
    var year = date.getFullYear()
    var formYear = document.getElementById('txtyear')
    var formSex = document.getElementById('radsex')
    var ans = document.getElementById('ans')
    // var ans = document.querySelector('ans') 
    // formYear.value.length takes the size of the written numbers, if no numbers than size 0
    if (formYear.value.length == 0 || Number(formYear.value) > year) {
        alert('[ERROR] Check the values and try again')
    } else {
        // radio buttons must have a same name or they will be seen as not connected
        // here we can later chose the one to use by []
        var formSex = document.getElementsByName('radsex')
        var age = year - Number(formYear.value)
        // ans.innerHTML = `Calculated age: ${age}` for a test
        var gender = ''
        // we can create HTML elements with createElement()
        var img = document.createElement('img')
        // we can add attibutes inside the created tags
        img.setAttribute('id', 'photo')
        // here formSex takes all the above, so we can jsut [] to chose the radio button
        if (formSex[0].checked) {
            gender = 'Male'
            if (age >= 0 && age < 10) {
                // child
                img.setAttribute('src', 'baby-m.png')
            } else if (age >= 10 && age < 21) {
                // young
                img.setAttribute('src', 'young-m.png')
            } else if (age > 21 && age < 50) {
                // adult
                img.setAttribute('src', 'adult-m.png')
            } else {
                // old
                img.setAttribute('src', 'old-m.png')
            }
        } else if (formSex[1].checked) {
            gender = 'Female'
            if (age >= 0 && age < 10) {
                // child
                img.setAttribute('src', 'baby-f.png')
            } else if (age >= 10 && age < 21) {
                // young
                img.setAttribute('src', 'young-f.png')
            } else if (age > 21 && age < 50) {
                // adult
                img.setAttribute('src', 'adult-f.png')
            } else {
                // old
                img.setAttribute('src', 'old-f.png')
            }
        }
        ans.style.textAlign = 'center'
        ans.innerHTML = `We noticed that you are ${gender} at ${age} years old.`
        // this will append, or add, the new element img and so be visible
        ans.appendChild(img)
    }
}
```

## MODULO E
### Aula 13
Loops `while` and `do while`

```JS
// loop with initial logic test
// while the condition is true the action will be repeated
while (condition){
    action
}

// loop with finishing logic test
//
do{
    action
} while(condition)
```

### Aula 14
Loops `for`

```JS
for(start;test/condition;incrementation){
    action
}
```
We can use debugging in order to see the step by step process of the loop, allowing a better view of the action block (depuration mode??)

For that we need to add a breakpoint, also watch the variables we are interested on and start by clicking on the Run tab and F10 to do steps

It's good to check errors, need to remember it is not because it runs that errors are not present

### Aula 14ex
>Ex1: A counter that the used gives the start, the end and the step. It shows the result

The following is my attempt at the exercice, I was able to do all that was asked, but I had to repeat the loop twice, that is something I expect to not have to do on the correction.

Exemple image, from video:

![exemple_image](/images//Capture%20d’écran%202024-09-20%20180040.jpg)
```JS
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

```
Myversion:

![my_version_image](/images/Capture%20d’écran%202024-09-20%20180119.jpg)
---

>Ex2: The times table

Here the goal is to get an input from the use and display the times table of the number up to 10, and all of it inside a select

Exemple image, from video:

![times_table_image_exemple](/images/Capture%20d’écran%202024-09-20%20180654.jpg)

My solution, that works on the major points. I need to see the solutions in order to check my mistakes, such as the ones commented at the end

```JS
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

```
My solution:

![times_table_image_exemple](/images/Capture%20d’écran%202024-09-20%20203050.jpg)

Notice the following error, the table 9 is under the table 8, for in the video only one table is displayed even when the button is clicked twice without a refresh
![times_table_image_exemple](/images/Capture%20d’écran%202024-09-20%20203315.jpg)

---
> The following is the code from the solution videos

For the Counter:
```JS
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
```
For the Times Table:

```JS
function generate() {
    let num = document.getElementById("txtn")
    let table = document.getElementById("selTable")
    // this here is the simple part that erases the select before we can reqrite!! so simple but I dindn't see it. 
    // Won't commit the same mistake 
    table.innerHTML = ''
    // the above also solves my problem of showing the text, since it erases eveeyrhing once the function is called

    if (num.value.length == 0) {
        alert('Please write a number!')
    } else {
        let n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n * c}`
            // this allows the options to recieve a value, necessary for other languages, such as PHP
            item.value = `table${c}`
            table.appendChild(item)
            // necessary for a while loop
            c++
        }
    }


}
```

## MODULO F
### Aula 15


## Conclusion