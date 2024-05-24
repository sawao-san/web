const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = '私はリンクです！！！！';
// }

for (let link of allLinks) {
    link.style.color = 'red';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}

// const squareImages = document.getElementsByClassName("square");

// const imgSrc = document.getElementsByTagName("img")[1].attributes.src.nodeValue;

// for (let img of squareImages) {
//     img.src = imgSrc;
// }