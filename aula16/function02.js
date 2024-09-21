function sum(n1, n2) {
    return n1 + n2
}
console.log(sum(2, 5)) // output: 7

// what if we do not give a parameter?
console.log(sum(2)) // output: NaN; Not a Number
// to solve this we can set a default/optional value for a parameter; here they are 0 if not given
function sum2(n1 = 0, n2 = 0) {
    return n1 + n2
}
console.log(2) // output: 2

