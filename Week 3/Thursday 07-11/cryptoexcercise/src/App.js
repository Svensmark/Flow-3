import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {<CryptoTable />}
    </div>
  );
}
export default App;


function CryptoTable() {
  const [data, setData] = useState({"Loading": "data .."});
  var res = "";
  useEffect(() => {
    fetchData()
  }, []);

  async function fetchData() {
    res = await fetch("http://localhost:8080/ExcerciseThursday/api/crypto");
    res.json().then(res => setData(res));
  }

  return (
    <div>{<TableMap data={data} />}</div>
  )
}


function TableMap(props) {
  var arri = [];
  for (const [key, value] of Object.entries(props.data)) {
    const arrj = {key,value};
    arri.push(arrj);
  }

  return (
    <table align="center">
      <thead>
        <tr>
          <th><h1>Symbol</h1></th>
          <th><h1>Value</h1></th>
        </tr>
      </thead>
      <tbody>
        <Table arr={arri}/>
      </tbody>
    </table>
  )
}


function Table({ arr }) {
  const tableItems = arr.map((n,i) => <TableItem key={i} mapKey={n.key} value={n.value} />);
  return tableItems;
}


function TableItem(props) {
  return <tr><th>{props.mapKey}</th><th>{props.value}</th></tr>
}
