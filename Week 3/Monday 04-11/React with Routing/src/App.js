import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Img from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var data = require("./data/data.json");

const Home = () => (
  <div>
    <h2>Welcome to our friends site</h2>
    <p><Link to="/all">See all users</Link></p>
  </div >
)

const All = () => (
  <div>
    <Container fluid>
      <Table striped bordered hover size="lg" variant="dark" fluid>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((person, index) => {
            return (
              <tr>
                <th><Img src={person.picture.thumbnail} alt="alt" fluid thumbnail /></th>
                <th>{person.first} {person.last}</th>
                <th><Link to={"/details/" + index}>Details</Link></th>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
    <p><Link to="/">Go back</Link></p>
  </div>
)

const Details = props => {
  const { match } = props;
  let person = data.users[match.params.index];
  return (
    <Container>
      <h1>Details for {person.first} {person.last}</h1>
      <Row>
        <Col fluid>
          <Table striped bordered hover size="lg" variant="dark">
            <tbody>
              <tr><th><p>Gender: </p></th> <th><p>{person.gender}</p></th></tr>
              <tr><th><p>First Name: </p></th> <th><p>{person.first}</p></th></tr>
              <tr><th><p>Last Name: </p></th> <th><p>{person.last}</p></th></tr>
            </tbody>
            <tbody>
              <tr><th><p>Street: </p></th> <th><p>{person.street}</p></th></tr>
              <tr><th><p>City: </p></th> <th><p>{person.city}</p></th></tr>
              <tr><th><p>Zip: </p></th> <th><p>{person.zip}</p></th></tr>
            </tbody>
            <tbody>
              <tr><th><p>Phone: </p></th> <th><p>{person.phone}</p></th></tr>
              <tr><th><p>Cell: </p></th> <th><p>{person.cell}</p></th></tr>
              <tr><th><p>Email: </p></th> <th><p>{person.email}</p></th></tr>
            </tbody>
          </Table >
        </Col>
        <Col fluid>
          <Img src={person.picture.large} />
        </Col>
      </Row>
      <p><Link to="/all">Go back</Link></p>
    </Container>

  )
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all" component={All} />
        <Route path="/details/:index" component={Details} />
      </Switch>
    </Router>
  );
}
