const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const id = searchParams.get("id")

fetch("https://rickandmortyapi.com/api/character/" + id)
.then(response => response.json())
.then(json => {
    console.log(json)
    const container = document.querySelector(".container")
    const title = document.querySelector("#title")
    const characterimage = document.querySelector("#character--image")
    title.innerText = json.name
    characterimage.setAttribute("src", json.image)
        const card = `
        <div class="character character--information">
            <h2>Genero:${json.gender}</h2>
            <h3>Status:${json.status}</h3>
            <h4>Ubicacion:${json.location.name}</h4>
            <h4>Origen:${json.origin.name}</h4>
            <p>Especie:${json.species}</p>
            <a href="index.html?">Ir al inicio</a>
        </div>
        `
    container.innerHTML = card
})

