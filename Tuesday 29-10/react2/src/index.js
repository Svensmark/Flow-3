import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ListDemoApp';
import App2 from './ListDemoApp2'
import App3 from './App'
import App4 from './App2'

let app = <App/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  id="App1">ListDemoApp</a> &nbsp;
         <a href="/"  id="App2">ListDemoApp2</a> &nbsp;
         <a href="/"  id="App3">useState button</a> &nbsp;
         <a href="/"  id="App4">Time Display</a> &nbsp;
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    const id = event.target.id;
    switch (id) {
        case "App1": app = <App />; break;
        case "App2": app = <App2 />; break;
        case "App3": app = <App3 />; break;
        case "App4": app = <App4 />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));