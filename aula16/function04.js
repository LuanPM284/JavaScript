// a factorial is: n! = n(n-1)! with 1!= 1; or 5! = 5*4*3*2*1 = 120
function factorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(factorial(5)) // output: 120