/* .reduce() does not mutate the original data, store result in a variable

.reduce()
    Returns: Whatever you want it to! (See video for explanation)
    Purpose: Take an array of data and Reduce it into a smaller or completely different data set.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const result = array.reduce(function(final, current){})

    example: result = nums.reduce(function(final, num){
        final = final + num OR final += num
        return final
    }, second argument of reduce:) final starts at second argument, IF no starting point, will start at the first
    item of the array

    example with objects:

    // 2 - reduce the users to an array of strings of the user's first and last names

const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]

// output: ["joe smithy", "tina johnson", "rick sanchez"]

const result = users.reduce(function(final, user){
    final.push(user.fName + " " + user.lName)
    return final // MUST return final
}, []) // set the starting point as the desired data type, now you have acess to this datatypes methods

//EXAMPLE

// 3 - reduce the array into a count of how many people voted
const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

const voteCount = voters.reduce(function(final, voter){
    if(!voter.voted){
        final++
    }
    return final
}, 0)

// Return an object that has a count of both who voted and who didnt
// OUTPUT: { didVote: 3, didntVote: 1 }

const voterObj = voters.reduce(function(final, voter){
    if(voter.voted){
        final.didVote++
    } else {
        final.didntVote++
    }
    return final
}, { didVote: 0, didntVote: 0 })

console.log(voterObj)
*/

// Turn an array of numbers into a total of all the numbers

const numbers = [1,2,3]

const numbersTotal = numbers.reduce(function(final, number) { 
    final = final +number
    return final
},0)
console.log(numbersTotal)

//Turn an array of numbers into a long string of all those numbers.

const numberString = numbers.reduce(function(final, number){
    
    return final + number.toString()
},"")

console.log(numberString)

//Turn an array of voter objects into a count of how many people voted

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const didVote = voters.reduce((final, voters) => {
    if(voters.voted){
        final.voted++
    } else {
        final.notVoted++
    }
    return final
},{voted:0, notVoted: 0})

console.log(didVote)

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const total = wishlist.reduce((final, item) => {
    final += item.price // final = item.price + final 
    
    return final
},0)

console.log(total)

//Given an array of arrays, flatten them into a single array

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const flattenedArray = arrays.reduce((final, array) => {// FAILED
    final = array.concat() + array.flat()
    
    return final
}, [])

console.log(flattenedArray)

const voterInfo = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const voterResults = voterInfo.reduce((final, voter) => {
    if(voter.age <= 25){
         final.youngVotes++
    } if (voter.age <= 25 && voter.voted) {
         final.YoungPeopleVoted++
    } if (voter.age >= 26 && voter.age <= 35) {
        final.midAgeVotes++
    } if (voter.age >= 26 && voter.age <= 35 && voter.voted) {
        final.midPeopleVoted++
    } if (voter.age >= 35){
        final.oldVotes++
    } if (voter.age > 35 && voter.voted) {
        final.oldPeopleVoted++
    }
        return final

}, {youngVotes: 0, YoungPeopleVoted: 0, midAgeVotes: 0, midPeopleVoted: 0, oldVotes: 0, oldPeopleVoted:0})

console.log(voterResults)



// switch only evaluates the condition once, can be used instead of if/else if,
 //all conditions need to be evaluated

const voterResultsSwitch = voterInfo.reduce((final, voter) => {
    switch(voter.age, voter.voted) {
        case voter.age <= 25:
            final.youngVotes++;
            break;
        case voter.age <= 25 && voter.voted: 
            final.YoungPeopleVoted++;
            break;
        case voter.age >= 26 && voter.age <= 35: 
            final.midAgeVotes++;
            break;
        case voter.age >= 26 && voter.age <= 35 && voter.voted:
            final.midPeopleVoted++;
            break;
        case voter.age >= 35:
            final.oldVotes++;
            break;
        case voter.age > 35 && voter.voted:
            final.oldPeopleVoted++;
   }
       return final
}, {youngVotes: 0, YoungPeopleVoted: 0, midAgeVotes: 0, midPeopleVoted: 0, oldVotes: 0, oldPeopleVoted:0})

console.log(voterResultsSwitch)