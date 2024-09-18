var now = new Date()
var weekDay = now.getDay()
// the days are given as a place inside an array of the week days starting on Sunday as first element
// console.log(weekDay)
/*
Sunday = 0
Monday = 1
Tuesday = 2
Wednesday = 3
Thursday = 4
Friday = 5
Saturday = 6
*/
// weekDay outputs a number, so it's an expression
switch (weekDay) {
    case 0:
        console.log('Sun')
        break
    case 1:
        console.log('Mon')
        break
    case 2:
        console.log('Tue')
        break
    case 3:
        console.log('Wed')
        break
    case 4:
        console.log('Thurs')
        break
    case 5:
        console.log('Fri')
        break
    case 6:
        console.log('Sat')
        break
    default:
        console.log('No such Day')
        break
}