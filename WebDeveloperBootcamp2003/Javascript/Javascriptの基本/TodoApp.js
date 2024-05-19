

let command = prompt("コマンドを入力してください(new, list, delete, quit)");
const todoes = ["水やりをする", "掃除をする"];

while (command !== "quit" && command !== "q") {
    //newコマンド実行時
    if (command === "new") {
        let newTodo = prompt("新しいTodoを入力してください");
        todoes.push(newTodo);
        console.log(`「${newTodo}」を追加しました`);
    }

    //listコマンド実行時
    else if (command === "list") {
        console.log("------------------------");
        for (let i = 0; i < todoes.length; i++) {
            console.log(`${i}: ${todoes[i]}`);
        }
        console.log("------------------------");
    }

    //deleteコマンド実行時
    else if (command === "delete") {
        let indexTodo = parseInt(prompt("削除するインデックスを入力してください"));

        //入力された値が数値ではないとき
        if (Number.isNaN(indexTodo)) {
            console.log("有効な数値を入力してください");
        }
        //入力された値が数値の時
        else {
            //0以上で配列の数よりも少ない値が指定されたとき
            if (indexTodo >= 0 && indexTodo < todoes.length) {
                const deleted = todoes.splice(indexTodo, 1);
                console.log(`「${deleted[0]}」を削除しました`);
            }
            //配列に存在しないインデックスが指定されたとき
            else {
                console.log("indexが存在しません");
            }
        }
    }
    //その他コマンド実行時
    else {
        console.log("無効なコマンドです")
    }

    command = prompt("コマンドを入力してください(new, list, delete, quit)");
}

console.log("アプリを終了しました")
