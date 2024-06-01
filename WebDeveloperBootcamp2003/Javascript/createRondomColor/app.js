
const color = {
    red: 0,
    green: 0,
    blue: 0,
    // sum: this.red + this.green + this.blue,

    createColor: function () {
        this.red = Math.floor(Math.random() * 256);
        this.green = Math.floor(Math.random() * 256);
        this.blue = Math.floor(Math.random() * 256);
        return `rgb(${this.red},${this.green},${this.blue} )`;
    },

    // getColorCode: function () {
    // return `rgb(${this.red},${this.green},${this.blue} )`;
    // },
    sumColorValue: function () {
        return this.red + this.green + this.blue;
    },
    isDarkColor: function () {
        if (this.red + this.green + this.blue <= 500) {
            return true;
        }
        return false;
    }
}

function colorize() {
    const colorCode = color.createColor()
    this.style.backgroundColor = colorCode;

    const firstChild = this.firstElementChild;
    firstChild.innerText = `${colorCode}\nRGB値の合計=${color.sumColorValue()}`;
    if (color.isDarkColor()) {
        firstChild.style.color = "white"
    }
}


const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const palette = document.querySelector("#palette");

createColorButton_Clicked = () => {

    //色作成
    const colorCode = color.createColor();
    h1.innerText = colorCode
    // body.style.backgroundColor = color.getColorCode();

    //カード作成
    const colorCard = document.createElement("div")
    colorCard.classList.add("color-card");
    colorCard.style.backgroundColor = colorCode
    colorCard.addEventListener("click", colorize)
    palette.appendChild(colorCard);

    //カードのテキスト作成
    const colorCardRGB = document.createElement("span")
    colorCardRGB.classList.add("color-card-rgb");
    colorCardRGB.innerText = `${colorCode}\nRGB値の合計=${color.sumColorValue()}`;
    if (color.isDarkColor()) {
        colorCardRGB.style.color = "white"
    }
    colorCard.appendChild(colorCardRGB);

}

createColorButton = document.querySelector("#createColor");
createColorButton.addEventListener("click", createColorButton_Clicked);



