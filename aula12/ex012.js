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
