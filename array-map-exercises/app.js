/* .map()
    returns: A new array the same size as the input array
    purpose: allows you to take an array of data and create a new array of data from it.
    
*/


// Make an array of numbers that are doubles of the first array

const numbers = [4, 9, 16, 25]

function doubleNumbers(arr){
    return arr * 2
  }

const newNumbers = numbers.map(doubleNumbers)

console.log(newNumbers)

// Take an array of numbers and make them strings


function stringItUp(arr){
    return arr.toString()
  }

  const numberString = numbers.map(stringItUp)

  console.log(numberString)

  // Capitalize the first letter of each name and make the rest of the characters lowercase// 
  const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

  const result = names.map(function(name){
    const cut = name.substring(1) // second parameter If omitted: the rest of the string.
    const lowerCase = cut.toLowerCase()
    const firstLetterUpperCase = name[0].toUpperCase()
    
    return firstLetterUpperCase + lowerCase
  })
  console.log(result)
  

  



// Make an array of strings of the names


function namesOnly(arr){
    
    return arr.name
  }
  
  const peopleObject = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]

  const newPeopleArray = peopleObject.map(namesOnly)
  
  console.log(newPeopleArray)

  // Make an array of strings of the names saying whether or not they can go to The Matrix

  function makeStrings(arr){
     if(arr.age < 18){
        return arr.name + " is underage!"
    } else if (arr.age > 18){
         return arr.name + " can go to the Matrix."
    }
    
  }

const matrixArray = peopleObject.map(makeStrings)
console.log(matrixArray)

function readyToPutInTheDOM(arr){
    return "<h1>" + arr.name + "</h1>" + "<h2>" + arr.age + "</h2>"
  }

  const readyForDom = peopleObject.map(readyToPutInTheDOM)

  console.log(readyForDom)