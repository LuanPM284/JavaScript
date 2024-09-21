let num = [5, 8, 2, 9, 3]

console.log(num) // output: [ 5, 8, 2, 9, 3 ]
console.log(`My array is ${num}`) // output: My array is 5,8,2,9,3

// we can add values into the array using 
// // num[index / key] = value

// an insert method also exists, it adds at the end, without the need of an key
num.push(7)
// how to find the 'size' of elements inside an array, it's an attibute so no ()
num.length
// it will sort the elements, by increasing order
num.sort()

// some exemples:

console.log(`The array has ${num.length} positions`) // output: The array has 6 positions; after adding element 7
console.log(`The first element of the array is ${num[0]}`)// output: The first element of the array is 2; after sorting

// how to display the array, without writting each key
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
console.log(num[6])
*/
// 'num.length' gives us the limit to loop
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

// simplefied syntax for the same
for (let pos in num) { // "for any (pos)ition in the array do"
    console.log(num[pos])
}

// a more "advance" case is using the foreach that will iterate the values of an array; same output
/*
num.forEach(i => {
    console.log(i)
});
*/

// how to look for values inside an array; array.indexOF(value)
// num.indexOf(3)
console.log(num.indexOf(3)) // output: 1; position of the 3 after sorting 

// num.indexOf(10)
console.log(num.indexOf(100)) // output: -1; the value does not exist inside this array; it's a default