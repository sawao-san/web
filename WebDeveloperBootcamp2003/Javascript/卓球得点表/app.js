//ゲーム設定の選択肢
const pointSelect = document.querySelector('#points');
for (let i = 3; i <= 11; i++) {
    const option = document.createElement("option");
    // option.value = i;
    option.append(i);

    pointSelect.append(option);
}

const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
let currentScore1 = 0;
let currentScore2 = 0;
let endPoint = parseInt(pointSelect.value); //何点先取になったらゲーム終了
let isGameOver = false;

p1Score.innerText = currentScore1;
p2Score.innerText = currentScore2;


pointSelect.addEventListener('change', function () {
    endPoint = parseInt(pointSelect.value);
    reset();
})

//プレイヤー1ボタンのEvent定義
const player1Button = document.querySelector('#player1Button');
player1Button.addEventListener("click", addScore1);
window.addEventListener("keyup", addScore1);

function addScore1(e) {
    if (e.key === '1' || e.type === 'click') {
        if (!isGameOver) {
            currentScore1++;
            p1Score.innerText = currentScore1;
            if (currentScore1 === endPoint) {
                isGameOver = true;
                p1Score.classList.add('has-text-success');
                p2Score.classList.add('has-text-dsanger');
            }
        }
    }
}


//プレイヤー2ボタンのEvent定義
const player2Button = document.querySelector('#player2Button');
player2Button.addEventListener("click", addScore2);
window.addEventListener("keyup", addScore2);
function addScore2(e) {
    if (e.key === '2' || e.type === 'click') {
        if (!isGameOver) {
            currentScore2++;
            p2Score.innerText = currentScore2;
            if (currentScore2 === endPoint) {
                isGameOver = true;
                p2Score.classList.add('has-text-success');
                p1Score.classList.add('has-text-dsanger');
            }
        }
    }
}

//リセットボタンのEvent定義
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;

    currentScore1 = 0;
    p1Score.innerText = currentScore1;

    currentScore2 = 0;
    p2Score.innerText = currentScore2;


    p1Score.classList.remove('has-text-success', 'has-text-dsanger');
    p2Score.classList.remove('has-text-success', 'has-text-dsanger');
}

window.addEventListener("keyup", function (e) {
    if (e.key === 'r') {
        reset();
    }
})