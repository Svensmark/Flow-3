import './App.css';
import React, { useEffect, useState } from "react";


export default function App() {
    return <Clock />
}


class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date().toLocaleTimeString()
        }
        this.updateTime = () => this.setState({ date: new Date().toLocaleTimeString() })
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            this.updateTime()
            console.log("component is running")
        }, 1000)
        this.setState({ intervalId: intervalId })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return <h1>TIME: {this.state.date}</h1 >
    }
}


//Made as a function component (not done)
function ClockFunct(props) {
    let [date, setDate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date().toLocaleTimeString()); 
        }, 1000)

        return function cleanup() {

        }
    })

    return <h1>TIME: {date}</h1>
}
