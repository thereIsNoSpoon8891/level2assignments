/* .sort() 
    Returns: The array sorted but sort also mutates the original array, so capturing the returned value is not necessary.
    Purpose: To sort an unsorted array of items.

    if no comparison function is provided, the elements are converted to strings and sorted based on their 
    unicode character codes

    
    */


//Sort an array from smallest number to largest// SORT MUTATES THE ARRAY// must take 2 arguements 

const numbers = [1, 3, 5, 2, 90, 20]

numbers.sort((a, b) => a - b)

console.log(numbers)

// Sort an array from largest number to smallest

numbers.sort((a,b) => b - a)

console.log(numbers)

// Sort an array from shortest string to longest

const words = ["dog", "wolf", "by", "family", "eaten"]

words.sort((word1, word2) => word1.length - word2.length)

console.log(words)

//  Sort the objects in the array by age

const randomPeople = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

randomPeople.sort((person1, person2) => person1.age - person2.age)// person = each object, so, object.age 
                                                                  // to access the age value

console.log(randomPeople)

