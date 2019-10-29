import './App.css';
import React, { useState, useEffect } from "react";


export default function App() {
    return <ButtonDemo value={parseInt(localStorage.getItem("count"))} />;
}


function ButtonDemo(props) {
    const [count, setCount] = useState(props.value);
    useEffect(() => {
        localStorage.setItem("count", count)
    })
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Plus 1
            </button>
            <button onClick={() => setCount(count - 1)}>
                Minus 1
            </button>
        </div>
    );
}