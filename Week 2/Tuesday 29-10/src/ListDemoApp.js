import './App.css';
import React, { useState } from "react";

function NumberList({ numbers }) {
  //console.log("--NUMBERS -->", numbers)
  const listItems = numbers.map((n, i) => <ListItem key={i} value={n} />);
  return listItems;
}

function NumberTable({ numbers }) {
  const tableItems = numbers.map((n, i) => <TableItem key={i} value={n} />);
  return tableItems;
}

function ListDemo(props) {
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
      <hr />
      <h2>All numbers to table</h2>
      <TableItems numbers={props.numbers} />
    </div>
  );
}

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function TableItem(props) {
  return <tr><th>{props.value}</th></tr>
}

function TableItems(props) {
  return <table><tbody><NumberTable numbers={props.numbers} /></tbody></table>
}

class NumberClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4],
      count: 5
    }
    var numbersHold = [...this.state.numbers];
    this.addNumber = () => numbersHold.push(this.state.count) && this.setState({numbers: [...numbersHold]});
    this.increment = () => this.setState({cout: this.state.count ++})
  }

  componentDidMount() {
    let intervalId = setInterval(() => {
      this.addNumber()
      this.increment() 
    }, 1000)
    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    this.state.count = 5;
  }

  render() {
    return <ListDemo numbers={this.state.numbers} />;
  }
}



export default function App() {
  return <NumberClass />;
}
