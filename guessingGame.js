// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     outout:process.stdout
// })


let secretNumber = 1

const checkGuess = num => {
    if(num > secretNumber) return 'Too High ' + false
    if(num < secretNumber) return 'Too Low ' + false
    if(num === secretNumber) return 'Correct! ' + true
}

console.log(checkGuess(4))
console.log(checkGuess(2))
console.log(checkGuess(1))
