// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 2; i++) {

    const pokemon = document.createElement("div");
    container.appendChild(pokemon);
    pokemon.classList.add("pokemon");

    const newImg = document.createElement("img");
    newImg.src = `${baseURL}${i}.png`;
    pokemon.appendChild(newImg);

    const span = document.createElement("span");
    span.innerText = `#${i}`;
    pokemon.appendChild(span);


}

/* <div>
    <img></img>
    <span>#2</span>
</div> */