let friend = {
    name: 'Joe',
    sex: 'M',
    weigth: 85.4,
    gainWeigth(w) { // a function
        console.log('Gained Weigth')
        // "this" since using local obj variable
        this.weigth += w
    }
}
console.log(typeof friend) // output: object
console.log(friend.name) // output: Joe
console.log(`${friend.name} is currently ${friend.weigth}`) // Joe is currently 85.4

// I call upon the function inside the object
friend.gainWeigth(2)
console.log(`${friend.name} is currently ${friend.weigth}`) // Joe is currently 87.4

