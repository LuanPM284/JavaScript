// F8 for execute
var age = 77
if (age < 16) {
    console.log('Does not vote')
} else {
    // console.log('Votes')
    if (age < 18 || age > 65) {
        console.log('Vote is optional')
    } else {
        console.log("Can Vote")
    }
}
