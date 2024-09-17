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



## MODULO C

## MODULO D

## MODULO E

## MODULO F

## Conclusion