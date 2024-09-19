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
