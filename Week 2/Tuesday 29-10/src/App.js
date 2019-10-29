import './App.css';
import React, { useState, useEffect } from "react";


export default function App() {
    return <ButtonDemo incrementVal={1} value={parseInt(localStorage.getItem("count"))} />;
}

function ButtonDemo(props) {
    const [count, setCount] = useState(props.value);
    const incrementVal = props.incrementVal

    useEffect(() => {
        localStorage.setItem("count", count)
    })
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + incrementVal)}>
                Plus 1
            </button>
            <button onClick={() => setCount(count - incrementVal)}>
                Minus 1
            </button>
        </div>
    );
}