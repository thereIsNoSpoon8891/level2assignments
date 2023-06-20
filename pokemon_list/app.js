let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        console.log(data.objects[0].pokemon)
        showName(data.objects[0].pokemon)
    }
}

function showName(pokemonList){
    for (i = 0; i < pokemonList.length; i++){
        console.log(pokemonList[i])
        const h1 = document.createElement('h1')
        h1.textContent = pokemonList[i].name
        document.body.appendChild(h1)
    }
}
xhr.open("GET","https://api.vschool.io/pokemon", true);
xhr.send();

