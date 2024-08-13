const form = document.querySelector('form');
const container = document.querySelector(".container");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    // console.log(form.elements.queryProgram.value);
    const inputText = form.elements.queryProgram.value;
    const config = {
        params: {
            q: inputText
        }
    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data);

})

const makeImages = async (results) => {
    for (let result of results) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;

            container.append(img);
        }

    }
}