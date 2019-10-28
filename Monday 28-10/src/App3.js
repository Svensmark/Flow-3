import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { names } from "./file2";

class Welcome extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}



class WelcomePerson extends React.Component {
    render() {
        return (
            <h2>Hello {this.props.person.firstName} {this.props.person.lastName} - {this.props.person.email}</h2>
        );
    }
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
};
Welcome.defaultProps = {
    name: 'default'
};

WelcomePerson.propTypes = {
    person: PropTypes.element.isRequired &&
        PropTypes.shape(
            {
                firstName: PropTypes.string.isRequired,
                lastName: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired
            })
};



const persError = { firstName: "Jane", email: "j@wonnegut.dk", phone: "12345" }

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <Welcome />
            <Welcome name={47} />
            <WelcomePerson person={names[0]} />
            <WelcomePerson person={names[1]} />
            <WelcomePerson person={names[2]} />
            <hr />
            Error - Required prop missing
            <WelcomePerson person={persError} />
            <hr />
            Mapping an array 
            {names.map((p, i) => <WelcomePerson key={i} person={p} />)}
        </div>
    );
}

export default App;