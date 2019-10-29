import './App.css';
import React, { useState, useEffect } from "react";


var joke;

getRandomChuckJoke()

function getJoke() {
    return joke;
}

export default function App() {
    return <Joke value={localStorage.getItem("joke")} />;
}

function Joke(props) {
    var [joke, setJoke] = useState(props.value);

    useEffect(() => {
        localStorage.setItem("joke", joke)
    })
    return (
        <div>
            <p>Funny Joke:</p>
            <p>{joke}</p>
            <button onClick={() => getRandomChuckJoke() && setJoke(getJoke)}>
                Get ChuckNorris
            </button>
        </div>
    )
}

async function getRandomChuckJoke() {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url);
    const data = await response.json();
    joke = data.value;
}