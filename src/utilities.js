console.log ("utilities.js is started")

// this function is to be exported to others:
export const add = (a,b) => a + b
export const secretWord = 'HelloMyWord'

// default export (have to be a separate definition and a separate export default line)
const adducting = (a, b) => a + b
export default adducting

// or you can remove the export words above, and use only one export command for the file:
// export { add, secretWord, adducting as default }


console.log ("utilities.js is done")