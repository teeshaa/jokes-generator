const btn1 = document.getElementById("btn");
const joke1 = document.getElementById("joke");

const apiKey = "jCmTIMjYO6xJ6rr+jtCsMA==Fo2rajRIPU7WSseh";
const limit = 3;
const apiURL = `https://api.api-ninjas.com/v1/dadjokes?limit=${limit}`;

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

async function getJoke() {
    try {
        joke1.innerText = "Searching...";
        btn1.disabled = true;
        btn1.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btn1.disabled = false;
        btn1.innerText = "Tell me a Joke";

        joke1.innerText = data[0].joke;

    } catch (error) {
        joke1.innerText = "Eroor!";
        btn1.disabled = false;
        btn1.innerText = "Tell me a Joke";
        console.log(error);


    }
}

btn1.addEventListener("click", getJoke);