
//--------------デバッグ用の関数------------

const logResult = document.querySelector(".logResult");

//ログ出力用関数
const showLog = output => {
    const log = document.createElement("p");
    log.innerText = output;
    logResult.appendChild(log);
}
//---------------------------------------

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
const usernameInput = tweetForm.elements.username;
const tweetInput = tweetForm.elements.tweet;
tweetForm.addEventListener("submit", function (e) {
    e.preventDefault();

    addTweet(usernameInput.value, tweetInput.value);

    usernameInput.value = "";
    tweetInput.value = "";

})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);

    tweetsContainer.append(newTweet);
}

tweetForm.addEventListener("input", e => {
    showLog(usernameInput.value);
})

const testButton = document.querySelector("#testButton");


//delete
// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function (e) {
//         console.log('ul内クリック');
//         console.dir(e);
//         showLog(e);
//     })
// }

tweetsContainer.addEventListener('click', function (e) {
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'B') {
        e.target.closest('LI').remove();
    }
    console.dir(e.target);
})