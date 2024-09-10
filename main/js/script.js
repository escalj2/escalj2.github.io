document.getElementById('jokeBtn').addEventListener('click', getJoke);

function getJoke() {
    // Fetch a random joke from JokeAPI
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            const jokeDisplay = document.getElementById('jokeDisplay');
            
            // Check if the joke is a single or two-part joke
            if (data.type === 'single') {
                jokeDisplay.textContent = data.joke;
            } else {
                jokeDisplay.textContent = `${data.setup} ... ${data.delivery}`;
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}
