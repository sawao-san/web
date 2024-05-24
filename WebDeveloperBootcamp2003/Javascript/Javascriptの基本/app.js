// -------------配列-----------------------
// let cats = ["tama", "tora"];
// let dogs = ["pochi", "hachi"];

// cats.concat(dogs);

// console.log(cats.concat(dogs));

// console.log(cats.includes("tama"));

// console.log(dogs.indexOf("tama")); //存在しないものは-1になる。


//sliceのテスト
// let colors = ["red", "orange", "green", "yellow", "blue", "white"];

// console.log(colors.slice(3));
// console.log(colors.slice(5));

// console.log(colors.slice(2, 5));

// colors.splice(0, 1);
// console.log(colors);


// let nums = [1, 2, 3];
// let numsCopy = nums;
// nums.push(4);
// console.log(nums);
// console.log(numsCopy);


// -------------Object-----------------------
// const person = {
//     firstName: "Keita",
//     lastName: "Sawao",
//     age: 31
// };

// console.log(`${person.firstName + person.lastName}は${person.age}歳です`);

// const teamKumagaya = {
//     Sawao: 40,
//     Mori: 60
// }

// teamKumagaya.Goto = 80;
// console.log(teamKumagaya);

//-------------------繰り返し処理-------------------
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// const subreddits = [
//     "cooking",
//     "books",
//     "chickens",
//     "life",
//     "pics",
//     "soccer",
//     "movies"
// ]


// for (let subreddit of subreddits) {
//     console.log(subreddit);
// }

// const testScores = {
//     ken: 80,
//     yuki: 67,
//     taro: 89,
//     ryota: 91,
//     yuma: 72,
//     yuko: 77,
//     chiaki: 83,
//     kota: 97,
//     saeko: 81,
//     koki: 60
// }

// // for (let student of Object.keys(testScores)) {
// //     console.log(`${student}さんの点数は${testScores[student]}です。`);
// // }
// for (let student in testScores) {
//     console.log(`${student}さんの点数は${testScores[student]}です。`);
// }

//------------------関数----------------

// function singSong() {
//     console.log("ド");
//     console.log("レ");
//     console.log("ミ");
// }


// function lastElement(array) {
//     if (array.length === 0) {
//         return null;
//     }
//     return array[array.length - 1];
// }
// const nums = [50, 40, 1];

// function capitalize(str) {
//     let initial = str[0].toUpperCase();
//     let tring = str.slice(1);
//     return initial + tring;

// }

// function sumArray(arr) {
//     let sum = 0;
//     for (num of arr) {
//         sum += num;
//     }
//     return sum;
// }
// const test = "home";
// console.log(sumArray(nums));

// function returnDay(x) {
//     const days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     if (x < 1 || x > 7) {
//         return null
//     }
//     return days[x];
// }

// function bankRobbery() {
//     //変数を宣言
//     const heroes = ['スパイダーマン', 'スーパーマン', 'ブラックパンサー'];

//     //上記配列を使う関数を定義
//     function help() {
//         for (let hero of heroes) {
//             console.log(`助けて、${hero}!!!`);
//         }
//     }
//     help();
// }

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);

// function makeRandomFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log('おめでとう！！！！！');
//         }
//     } else {
//         return function () {
//             alert('ウイルスに感染しました');
//             alert('閉じないで');
//             alert('閉じないで');
//             alert('閉じないで');
//             alert('閉じないで');
//             alert('閉じないで');
//         }
//     }
// }

// const randomFunc = makeRandomFunc();

// randomFunc();

// function maleBetweenFunc (min, max) {
//     return function(num) {
//         return num >= min && num <= max ;
//     }
// }

// const isChild = makeBetweenFunk(0, 18);
// isChild(40);    //false
// isChild(9);     //true


// const isAdult = makeBetweenFunk(19, 64);
// isAdult(3)  //false
// isAdult(30) //true

// const isSenior = makeBetweenFunk(65, 120);
// isSenior(34)    //false
// isSenior(119)   //true

// const myMath = {
//     PI: 3.14,
//     square: function (num) {
//         return num ** 2;
//     },
//     cube: function (num) {
//         return num ** 3;
//     },

//     circle: function (radius) {
//         return radius * radius * this.PI;
//     },
//     circumference: function (radius) {
//         return 2 * radius * this.PI;
//     }

// }

// const myMath = {
//     PI: 3.14,
//     square(num) {
//         return num ** 2;
//     },
//     cube(num) {
//         return num ** 3;
//     },

//     circle(radius) {
//         return radius * radius * this.PI;
//     },
//     circumference(radius) {
//         return 2 * radius * this.PI;
//     }

// }

// const Cat = {
//     name: "タマ",
//     color: "grey",
//     breed: "アメリカンショートヘア",
//     cry() {
//         console.log(`${this.name}がニャーと泣きました。`)
//     }
// }

// Cat.cry();  //タマがニャーと泣きました

// const cry2 = Cat.cry;

// cry2(); //がニャーと泣きました。

// function shout(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     }
//     catch (e) {
//         console.log(e);
//         console.log('shoutには文字列を入れてください。')
//     }
// }


//------------配列のコールバックを利用したメソッド--------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// function print(element) {
//     console.log(element);
// }

// numbers.forEach(print);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// // numbers.forEach(function (element) {
// //     console.log(element);
// // });

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// const square = num => num * num;

// const rollDie = () => Math.floor(Math.random() * 6) + 1

// const makeFullName = (firstName, lastName) => firstName + " " + lastName


// const Users = [
//     {
//         firstName: "Keita",
//         lastName: "Sawao",
//         age: 31
//     },
//     {
//         firstName: "Momoko",
//         lastName: "Sawao",
//         age: 30
//     },
//     {
//         firstName: "Yuta",
//         lastName: "Mori",
//         age: 31
//     },
//     {
//         firstName: "Takumi",
//         lastName: "Goto",
//         age: 31
//     },
// ];

// const showUserAge = Users.map(function (user) {
//     return `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}は${user.age}です。`
// })

// const showUserAge = Users.map(user => `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}は${user.age}です。`)

// test = () => { console.log('やっほー') }
// test();
// setTimeout(() => { console.log('やっほー') }, 3000);

// const id = setInterval(() => { console.log(Math.floor(Math.random() * 6) + 1) }, 1000);

// clearInterval(id);



// const goodUsers = Users.filter((user) => {
//     return user.score >= 60
// })

// goodUsers.forEach(
//     user => console.log(`${user.lastName}さんは${user.score}であるためgoodユーザーです`)
// )

// const goodUsers = Users.filter(user => user.score >= 60).map(user => user.firstName + " " + user.lastName);


// goodUsers.forEach(
//     user => console.log(user)
// )

// const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77];

// console.log(
//     exams.reduce((total, score) => total + score)   //839
// );


// //------確認-----------
// let total = 0;

// for (exam of exams) {
//     total = total + exam;
// }
// console.log(total);     //839

// const minScore = exams.reduce((min, score) => {
//     if (min <= score) {
//         return min;
//     } else {
//         return score;
//     }
// })

// console.log(minScore);

// const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77];

// console.log(
//     exams.reduce((total, score) => total + score, 100)   //939
// );

// const person = {
//     firstName: "Keita",
//     lastName: "Sawao",
//     fullname: function () {
//         return `${this.lastName} ${this.firstName}`
//     }
// };

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }

// const nums = [4, 13, 44, 23, 4, 22, 23, 64, 56];

// maximum.max(nums);      //numsは配列であるため、NaN
// maximum.max(...nums);   //64

// const feline = {
//     legs: 4,
//     family: 'ネコ科'
// };

// const canine = {
//     family: 'イヌ科',
//     bark: true
// };

// console.log({ ...feline })  //{legs: 4, family: 'ネコ科'}
// console.log({ ...canine })  //{family: 'イヌ科', bark: true}

// const catDog = { ...feline, ...canine };
// console.log({ ...catDog })  //{legs: 4, family: 'イヌ科', bark: true}

// function sum() {
//     console.log(arguments);
// }

// sum(1, 2, 3);   //Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function sum(...nums) {
//     console.log(nums);
// }

// const scores = [9232221, 2131231, 3141241, 5356563, 12123123];

// const highScore = scores[0];
// const secondScore = scores[1];

// const [gold, silver] = scores;

// console.log(gold);      //9232221
// console.log(silver);    //2131231

// const person = {
//     email: "s.sky00ar@gmail.com",
//     password: "kewrwaraedrtwt",
//     firstName: "Keita",
//     lastName: "Sawao",
//     age: 32,
//     born: 1992,
// };

// const firstName = person.firstName;
// const lastName = person.lastName;
// const email = person.email;
// const { firstName, lastName, email } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(email);


// function fullName(person) {
//     const { firstName, lastName} = user;
//     return `${firstName} ${lastName}`;
// }

// function fullName({ firstName, lastName}) {
//     return `${firstName} ${lastName}`;
// }
const Users = [
    {
        firstName: "Keita",
        lastName: "Sawao",
        age: 31,
        score: 23
    },
    {
        firstName: "Momoko",
        lastName: "Sawao",
        age: 30,
        score: 89
    },
    {
        firstName: "Yuta",
        lastName: "Mori",
        age: 31,
        score: 76
    },
    {
        firstName: "Takumi",
        lastName: "Goto",
        age: 31,
        score: 56
    }
];

const goodUsers = Users.filter(user => user.score >= 60);
// const goodUsers = Users.filter(({ score }) => score >= 60);



