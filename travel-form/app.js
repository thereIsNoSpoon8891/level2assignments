let form = document.ticket

form.addEventListener("submit", function (e) {
    e.preventDefault
        let firstName = form.firstName.value
        let lastName = form.lastName.value
        let gender = form.gender.value
        let age = form.age.value
        let destination = form.location.value
        let food = []
        for(i = 0; i < form.foodType.length; i++){
            if (form.foodType[i].checked){
                food.push(form.foodType[i].value)
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + destination + "\nDietary restrictions: " + food);
})
