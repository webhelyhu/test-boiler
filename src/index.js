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



// // Rest parameter test, base version:
// const calculateAverage = (numOne, numTwo) => {
//     return (numOne + numTwo) / 2
// }

const calculateAverage = (...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    return sum / numbers.length
}

console.log(calculateAverage(0,100,88,64))


const calculateAverage2 = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage2('number', 0,100,88,64))



// SPREAD test

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Members: ${players.join(', ')}`)
}
printTeam ('Firsts', 'Big Bill', 'Marge', 'Hyde', 'Who Other')

const team = {
    name: 'Liberty',
    coach: 'Casy Penn',
    players: ['Marge', 'Penn', 'Jackie']
}
printTeam (team.name, team.coach, ...team.players)


// copy of an array
const cities = [ 'Amsterdam', 'Barcelona', 'Budapest']
const anAnotherArray = ['Dublin', ...cities, 'Paris']
// changing one of the arrays will not effect the other. They are independent.
console.log(anAnotherArray)


// using spread with object:
// babel 7: install --save-dev @babel/plugin-proposal-object-rest-spread
// babel 6: install babel-plugin-transform-object-rest-spread
// and webpack.config.js: ..... under options: ->> 
//     babel 7: plugins: ['@babel/plugin-proposal-object-rest-spread']
//     babel 6: plugins: ['transform-object-rest-spread']

let house = {
    bedrooms: 2,
    bathrooms: 1,
    yearBuilt: 2017
}
let newHouse = { 
    basement: true,
    ...house,
    bedrooms: 7
}
newHouse.bathrooms = 3

console.log (house)
console.log (newHouse)


