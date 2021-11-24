const getJokesBtn = document.querySelector('.getJokes');
const jokesList = document.querySelector('.jokes');
const inputField = document.querySelector('input[type="number"]');

getJokesBtn.addEventListener('click', getJokes);

function getJokes() {
    let numberOfJokes = inputField.value;
    let url = `http://api.icndb.com/jokes/random/${numberOfJokes}`

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let output = '';
        data.value.forEach(value => {
            console.log(value.joke);
            output += `<li>${value.joke}</li>`
        });

        jokesList.innerHTML = output;
    });
};