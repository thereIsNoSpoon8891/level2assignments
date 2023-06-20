const add = document.add
const subtract = document.subtract
const multiply = document.multiply

add.addEventListener("submit", function (event){
    event.preventDefault()

    let firstNumberInput = add.firstNumber.value// capture first number
    let secondNumberInput = add.secondNumber.value// capture second number
    
    add.firstNumberInput = ""// clear
    add.secondNumberInput = ""// clear

    let firstAddedNumber = Number(firstNumberInput)// the input is being treated as a string, it must 
    let secondAddedNumber = Number(secondNumberInput)// converted to an interger to be able to use math operators
    
    let sum = firstAddedNumber + secondAddedNumber// add the two intergers
    
    const injectSum = document.createElement('h1')// create the element

    injectSum.innerHTML = sum// set the element text content

    document.getElementById('sum').append(injectSum)// append it!
} )

subtract.addEventListener("submit", function (event){
    event.preventDefault()

    let firstNumberInput = subtract.firstSubtractedNumber.value// capture first number
    let secondNumberInput = subtract.secondSubtractedNumber.value// capture second number
    
    subtract.firstNumberInput = ""// clear
    subtract.secondNumberInput = ""// clear

    let firstSubNumber = Number(firstNumberInput)// the input is being treated as a string, it must 
    let secondSubNumber = Number(secondNumberInput)// converted to an interger to be able to use math operators
    
    let sum = firstSubNumber - secondSubNumber// subtract the two intergers
    
    const injectSum = document.createElement('h1')// create the element

    injectSum.textContent = sum// set the element text content

    document.getElementById('sum').append(injectSum)// append it!
} )

multiply.addEventListener("submit", function (event){
    event.preventDefault()

    let firstNumberInput = multiply.firstMultipliedNumber.value// capture first number
    let secondNumberInput = multiply.secondMultipliedNumber.value// capture second number
    
    multiply.firstNumberInput = ""// clear
    multiply.secondNumberInput = ""// clear

    let firstSubNumber = Number(firstNumberInput)// the input is being treated as a string, it must 
    let secondSubNumber = Number(secondNumberInput)// converted to an interger to be able to use math operators
    
    let sum = firstSubNumber * secondSubNumber// mulpiply the two intergers
    
    const injectSum = document.createElement('h1')// create the element

    injectSum.textContent = sum// set the element text content

    document.getElementById('sum').append(injectSum)// append it!

})