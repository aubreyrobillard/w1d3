////////////////////////////////
// Part I: HTML & CSS
////////////////////////////////
3

////////////////////////////////
// Easy Going
////////////////////////////////
// for (i = 1; i <= 20; i++)
//     console.log(i)

////////////////////////////////
// Get Even
////////////////////////////////
// for (i = 0; i <= 200; i++)
//     if(i % 2 === 0)
//         console.log(i)

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// 1. Write a javascript application that logs all numbers from 1 - 100.
// for (i = 1; i <= 100; i++)
//     console.log(i)

//2. If a number is divisible by 3 log "Fizz" instead of the number.
// for (i = 1; i <= 100; i++) 
//     if (i % 3 === 0)
//         console.log("Fizz") 
//             else console.log(i)

//3. If a number is divisible by 5 log "Buzz" instead of the number.
// for (i = 1; i <= 100; i++) 
//     if (i % 5 === 0)
//         console.log("Buzz") 
//             else console.log(i)

//4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// for (i = 1; i <= 100; i++) 
//     if ((i % 3 === 0) && (i % 5 === 0))
//         console.log("FizzBuzz") 
//     else console.log(i)


////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] = 5001
//     console.log(plantee)

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = ("Gotham City")
//     console.log(wolfy)

// 3. Give D'Art a second hometown by adding "Hawkins"
// wolfy.push("Hawkins")
//     console.log(wolfy)

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy.shift(), wolfy.unshift("Gameboy")
//     console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
    // console.log(ninjaTurtles)

// 2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// // for (let i = [0]; i <= 3; i++)
// //    console.log(ninjaTurtles[i])

// //    for (let upperName of ninjaTurtles) {
// //     console.log(upperName.toUpperCase(), "< question 2")
// // }
   

// ////////////////////////////////
// // Methods, Revisited
// ////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
console.log("Index of Titanic:")
console.log(favMovies.indexOf('Titanic'))

// 1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
console.log("Question 1:")
favMovies.sort()
 console.log(favMovies)

// 2. Use the method pop
console.log("Question 2:")
favMovies.pop()
    console.log(favMovies)

// 3. push "Guardians of the Galaxy"
console.log("Question 3:")
favMovies.push("Guardians of the Galaxy")
    console.log(favMovies)

// 4. Reverse the array
console.log("Question 4:")
favMovies.reverse()
    console.log(favMovies)

// 5. Use the shift method
console.log("Question 5:")
favMovies.shift()
    console.log(favMovies)

// 6. unshift - what does it return?
console.log("Question 6:")
favMovies.unshift("Son of Rambow")
    console.log(favMovies)

// 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
console.log("Question 7:")
console.log(favMovies.indexOf("Django Unchained"))
favMovies.splice(15, 1, "Avatar")
    console.log(favMovies)

// 8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
console.log("Question 8:")
const middle = (favMovies[Math.floor(favMovies.length / 2)])
let y = (favMovies.length)
let x = (favMovies.indexOf(middle)) 
    console.log(favMovies.slice(x, y))

// 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
console.log("Question 9:")
const sliceValue = (favMovies.slice(x, y))
console.log(sliceValue)

// 10. console.log your final results
console.log("Question 10:")
console.log[favMovies]

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// console.log(favMovies.indexOf["Fast and Furious"])
// This gives us an error codee since Fast and Furious does not exist


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////

// , "<< What you think will log");
// put console.log(where is waldo) inside of curly brackets. We'll know which array we're looking at

// ("< question number") at the end of each console.log