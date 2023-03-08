// Question 1
/**
 * Mutating array method are the methods that their operation on an array changes the array and returns an array entirely differnt from the initial one.
 * 
 * Examples of mutating array;
 * Array.join()
 * Array.sort()
 * Array.reverse()
 * Array.copyWithin()
 * Array.forEach()
 * 
 * 
 * Non-mutating array method are the array methods that their operation on an array doesn't change the original array. Both the original array and the final one are same.
 * 
 * Examples of non-mutation
 * Array.push()
 * Array.pop()
 * Array.unshift()
 * Array.shift()
 * Array.slice()
 * Array.splice()
 * */

// Question 2
const language = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

// Add 'Kotlin to the end of the array.
language.push('Kotlin')
console.log(language)

// Add 'Java' after 'Ruby'
language.splice(3,0, 'Java')
console.log(language)

// Remove the first item in the array
language.shift()
console.log(language)

// Add 'Scala' and 'Swift' to the beginning of the array
language.unshift('Scala', 'Swift')
console.log(language)

// Replace 'PHP' with 'Go' and 'Rust'
language.splice(language.indexOf('PHP'), 1, 'Go', 'Rust')
console.log(language)

let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;
}
console.log(changeFruit(fruit))
// When the function is called orange replaces banana, and the new array becomes ['apple', 'mango', 'orange']

// Question 4
let maximumNumber = function(array) {
    let maxNumber = array[0]
    for (let i = 0; i < array.length; i++) {
        if(array[i] > maxNumber) {
            maxNumber = array[i]
        }
    }
    return 'The maximum number is ' + maxNumber
}
// lets test
let arr = [3,10,7,8,99]
console.log(maximumNumber(arr))

// Question 5

function product(array) {
    let result = []
    for(let i = 0; i < array.length; i++) {
     result.push(array[i] * i)
    }
    return result
}
console.log(product(arr))