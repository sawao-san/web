// fetch('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         console.log('RESOLVE!!!', res);
//         return res.json();

//     }).then((data) => {
//         console.log('JSONゲット！！！', data);
//         return fetch('https://swapi.dev/api/people/2/');
//     })
//     .then((res) => {
//         console.log('2個目のRequestもRESOLVE', res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('エラー!!!', err);
//     })



// const loadStarWarsPeople = async () => {
//     const res = await fetch('https://swapi.dev/api/people/1/');
//     const data = await res.json();
//     console.log(data);
// }


// axios.get('https://swapi.dev/api/people/1/')
//     .then((result) => {
//         console.log("Resolve", result);

//     }).catch((err) => {
//         console.log("Reject", err);
//     });

const jokes = document.querySelector('#jokes');
const testButton = document.querySelector('button');

const getSWPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data.name);
    }
    catch (e) {
        console.log(e);
    }

}

// getSWPerson(1);
// getSWPerson(2);

const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    }
    catch (e) {
        console.log("エラー発生", e);
    }

}


const addNewJoke = async () => {
    try {
        const jokeText = await getDadJoke();
        console.log(jokeText);
        const li = document.createElement('li');
        li.append(jokeText);
        jokes.append(li);
    }
    catch (e) {
        console.log("エラー発生", e);
    }
}

testButton.addEventListener('click', addNewJoke);


// getDadJoke();

// getSWPerson(1);

