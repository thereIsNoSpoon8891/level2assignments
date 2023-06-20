const form = document.services

form.addEventListener("submit",(e) => {
    e.preventDefault()
    
    const gooombaTotal = form.goomba.value
    const bombTotal = form.bobs.value
    const cheepTotal = form.cheeps.value

    const goombaNumber = Number(gooombaTotal)
    const bombNumber = Number(bombTotal)
    const cheepNumber = Number(cheepTotal)
    
    const gombaCoins = goombaNumber * 5
    const bombCoins = bombNumber * 7
    const cheepCoins = cheepNumber * 11
    
    
    const totalCoins = gombaCoins + bombCoins + cheepCoins

    //const displayTotalCoins = document.createElement("li") for append
    
    //displayTotalCoins.textContent = totalCoins for append
    
   document.querySelector("#total").innerHTML = totalCoins
    

})


