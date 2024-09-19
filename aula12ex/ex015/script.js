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