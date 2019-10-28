import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {names} from "./file2";

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
        <h1>Hello {this.props.person.firstName} {this.props.person.lastName} - {this.props.person.email}</h1>
        );
    }
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
};
Welcome.defaultProps = {
    name: 'Stranger'
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



const persError =  {firstName:"Jane",email:"j@wonnegut.dk", phone: "12345"}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <Welcome />
            <Welcome name={47} />
            <WelcomePerson person={names[0]}  />
            <WelcomePerson person={names[1]}  />
            <WelcomePerson person={names[2]}  />
            <WelcomePerson person={persError} />
            <hr />
            {names.map( (p,i) => <WelcomePerson key={i} person={p}/>)}
        </div>
    );
}

export default App;