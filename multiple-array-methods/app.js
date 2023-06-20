/*You should use multiple array methods to solve these problems. Don't use `for` loops!

Using the provided `peopleArray` (bottom of this article), write a function that:

1. Returns a list of everyone older than 18, which is // filter()
2. sorted alphabetically by last name, and where// sort() ?
3. each name and age is embedded in a string that looks like an HTML `<li>` element. concat?

Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]

*/

const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
// chain togther the methods
const filteredArray = peopleArray.filter(person => person.age > 18).sort((personOne, personTwo) => { //compare function
    if (personOne.lastName < personTwo.lastName) { // 
        return -1;
    }
    if (personOne.lastName > personTwo.lastName) { //  This code compares each name. 
        return 1;  // If it's greater, it returns 1. If it's less, it returns -1. Otherwise, it returns 0. 
    }
    return 0; //The returned value is used to order our array's values alphabetically:
}).reduce((final, person) => {  // use reduce to produce the final output as a different data type
    final.push("<li>" + person.firstName +  " " + person.lastName + " is " + person.age + "</li>")
   
    return final
},[])

console.log(filteredArray)

[
    '<li>Kyle Mooney is 27</li>',
    '<li>Sarah Palin is 47</li>',
    '<li>Rick Sanchez is 78</li>',
    '<li>Morty Smith is 29</li>',
    '<li>Lev Tolstoy is 82</li>'
  ]
/* NOTES: In a situation when some names start with uppercase while others start with lowercase,
 then the output will be incorrect 
because the sort() method places uppercase letters before lowercase: */