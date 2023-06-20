// use rest, to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {
    console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");

/* Write a function that returns a food object with the array names as properties. 
You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned 
twice in both the name and value of properties in your object:

expected output: //=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }
*/

// function combineFruit(fruit, sweets, vegetables){
//     return {
//         fruit, sweets, vegetables
//     }
// }

const combineFruit = (fruits, sweets, vegetables) => ({fruits, sweets, vegetables})

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
             

// Use destructuring to use the property names as variables. Destructure the object in the parameter:
// To destructure an object inside a function's parameters we place a set of curly braces inside the
//  parentheses of the function. Inside the curly braces, we place the properties of the object which 
//  we wish to pick out. Below is an example using an arrow function.

const parseSentence = ({location, duration}) => console.log(`We're going to have a good time in ${location} for ${duration}`)
 
  
parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  });

/*    Use array destructuring to make this code ES6:

function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6
    return firstItem
}

*/
function returnFirst(items){
    const [firstItem] = items; //change this line to be es6
    return firstItem
}

/*
Write destructuring code to assign variables that will help us return the expected string. 
Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    //your code here
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
}

returnFavorites(favoriteActivities)
*/ 

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(array){
    const [firstFav, secondFav, , , thirdFav] = array
    return console.log(`My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`);
}

returnFavorites(favoriteActivities)

/* 
Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
You will need to change how the arrays are passed in. You may write it assuming you will always 
recieve three arrays if you would like to.

function combineAnimals() {

}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);
*/
const combineAnimals = (...arrays) => [].concat(...arrays)
                    // if you use array.concat.(...array), you will get back the original arrays PLUS the concated array...
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))


// Try to make the following function more ES6y:

const product = (...a) => {
  var numbers = [...a];

  return numbers.reduce((acc, number) => acc * number, 1)
}
console.log(product(1, 2, 3, 4, 5, 6))


// Make the following function more ES6y. Use at least both the rest and spread operators:

const unshift = (array, ...a) => [...a].concat(array);

console.log(unshift([], 1, 2, 3))

// Write some destructuring code to help this function out. Use the ES6 shorthand that
// helps make the syntax look less redundant to simplify it:

function populatePeople(names){
  return names.map(function(name){
      name = name.split(" ");// makes ['firstName', 'lastName' ]    // can I eliminate this line?
      const [firstName, lastName] = name; // assigns firstName to index 0, lastName to index 1
      return {firstName, lastName}
  })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]