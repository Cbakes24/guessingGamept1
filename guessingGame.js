const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    outout: process.stdout
})


let secretNumber = 1

const checkGuess = num => {

if(num > secretNumber){
 console.log( 'Too High ')
  return false
}
    if(num < secretNumber){

     console.log( 'Too Low ')
     return false

    }
    if(num === secretNumber){

     console.log( 'Correct! ')
     return true
    }

}
function askGuess() {
  rl.question('Enter a guess: ', (num) =>{
    // console.log('hello')
  checkGuess(Number(num))
  rl.close()

})
}
// console.log(askGuess(4))
// console.log(askGuess(2))
// console.log(askGuess(1))
askGuess()
// console.log('hello')
