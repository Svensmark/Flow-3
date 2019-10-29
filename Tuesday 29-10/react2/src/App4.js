import './App.css';
import React from "react";

export default function App() {
    return <DadJoke />;
}


var dadJoke;
getRandomDadJoke();

class DadJoke extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            joke: getDadJoke()
        }
        this.updateJoke = () => getRandomDadJoke() && this.setState({joke: getDadJoke()});
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            this.updateJoke()
            this.setState({joke: getDadJoke()});
            console.log("component is running")
        }, 11000)
        this.setState({ intervalId: intervalId })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return <h1>{this.state.joke}</h1 >
    }

}

function getDadJoke() {
    return dadJoke;
}

async function getRandomDadJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      })
    const data = await response.json();
    dadJoke = data.joke;
}
