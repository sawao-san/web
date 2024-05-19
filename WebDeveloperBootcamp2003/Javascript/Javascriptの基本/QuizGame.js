let maximum = parseInt(prompt("数字を入力してください"));

while (!maximum) {
    prompt("エラーが起きました。有効な数値を入力してください")
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;
console.log(targetNumber);

let input = prompt("先ほど入力した番号以下でランダムな数値を生成しました。当ててください。");
let count = 1;

while (targetNumber !== parseInt(input)) //生成した値と入力した値が違う限り繰り返し
{
    count++;

    if (input === "q") break;
    else if (!parseInt(input)) {
        input = prompt('無効な値です。有効な数値を入力してください');
    }
    else {
        input = prompt('違います。');
    }
}
if (input === "q") {
    console.log("お疲れさまでした。")
} else {
    console.log(`おめでとう！ ${count}回で当てました。`);
}

