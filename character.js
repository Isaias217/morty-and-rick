const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const id = searchParams.get("id");

fetch("https://rickandmortyapi.com/api/character/" + id)
.then(response => response.json())
.then(json => {
    console.log(json)
    const container = document.querySelector(".container")
    const title = document.querySelector("#title")
    const characterImage = document.querySelector("#character--image")
    title.innerText = json.name
    characterImage.setAttribute("src", json.image)
        const card = `       
        <div class="character character--info">
            <div class="character_content">
                <h2>Genero: ${json.gender}</h2>
                <h3>Estado: ${json.status}</h3>
                <h4>Locacion: ${json.location.name}</h4>
                <h4>Origin: ${json.origin.name}</h4>
                <h4>Especie: ${json.species}</h4>
                    <div class="botton"><a href="index.html">Ir al Inicio</a></div>
            </div>
        </div
        `
    container.innerHTML = card
})