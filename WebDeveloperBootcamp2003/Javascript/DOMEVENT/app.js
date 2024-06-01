const helloButton = document.querySelector("#hello");
const goodbyeButton = document.querySelector("#goodbye");

helloButton.addEventListener("click", () => {
    console.log("hello")
})

goodbyeButton.addEventListener("click", () => {
    console.log(`'goodbye'`)
})

const input = document.querySelector("#input");
const keyEventResult = document.querySelector("#keyEvent .logResult");

//ログ出力用関数
const showLog = output => {
    const log = document.createElement("p");
    log.innerText = output;
    keyEventResult.appendChild(log);
}


input.addEventListener("keydown", function (e) {
    showLog(`key : ${e.key}\ncode : ${e.code}`)
})


input.addEventListener("keyup", function () {
    showLog("keyup");
})

