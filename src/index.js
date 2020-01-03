// importing the files needed (.js is not needed)
// import './utilities'     // only run the file, nothing is needed importing.

// the first name you give for the default export, or just skip it, and name exports inside the {}
import defaultfunction, { add, secretWord } from './utilities'

const name = 'A simple log to the console from index.js. ' + secretWord
console.log(name)

// testing: creating an object
class OneObject {
    myMethod() {
        return 'Testing...'
    }
}

// // testing to console:
const justsomething = new OneObject()
console.log(justsomething.myMethod())
console.log('call add(): ' + add(3,4))

console.log('call the default export from utilities, whatever its name is: ' + defaultfunction(5,5))


