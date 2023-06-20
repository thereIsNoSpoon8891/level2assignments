
const ownerName = "John"
let age = 101

function runForLoop(pets) {
    var petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else if (pets[i] === "dog"){ 
            name = "spot"
        } else {
            name = ownerName
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", ownerName )
    return petObjects
}

runForLoop(["cat", "dog"])

/* 
# **ES6 Arrow Functions**

 **Task 1**

Re-write this .map() using an arrow function:

Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, 
and not starting an object, so the `:` will be an unexpected symbol.
*/

const carrots = ["bright orange", "ripe", "rotten"]


const mapVegetables = array => array.map(carrot => ({ type: "carrot", name: carrot }))
//if returning a object, wrap object in parenthesis so JS doesnt think its starting a function
console.log(mapVegetables(carrots))
   

/* 
 **Task 2**

Re-write this `.filter()` ’s callback function using an arrow function:
*/

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = array => array.filter(person => person.friendly)

console.log(filterForFriendly(people))

/*
 **Task 3**

Re-write the following functions to be arrow functions:
*/

const doMathSum = (a, b) => a + b
     
const produceProduct = (a, b) => a * b
    
/* 
 **Task 4**

Write a `printString` function that takes `firstName`, `lastName`, 
and `age` as parameters and returns a string like the following: Hi Kat Stark, how does it feel to be 40?

*/

const printString = (firstName = "Jane", lastName = "Doe", age = 100) => 
`Hi ${firstName} ${lastName} how does it feel to be ${age}?`
    

console.log(printString("Frodo", "Baggins" ))

/* 
### **Task 5**

Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.


*/
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

 const filterForDogs = array => array.filter(animal => animal.type === "dog")
 
 console.log(filterForDogs(animals))

 /* 
 # **Template Literals**

Using template literals, write a function that takes `location` and `name` parameters and outputs a 
message formatted like this: Hi Janice!

Welcome to Hawaii.

I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.
 */

const printWelcomeMessage = (firstName, location) => 
`Hi ${firstName}!
Welcome to ${location}.
I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

console.log(printWelcomeMessage("Snake", "Mexico"))
