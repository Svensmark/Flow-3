import React from 'react';
import './App.css';
import person, {males, females} from "./file2";

const {firstName, email, gender, lastName} = person;

const arr1 = [...males,...females];
console.log(arr1);


const arr2 = [...males,firstName, "Helle",...females,"Tina"];
console.log(arr2);

const personV2 = {
    email: email,
    firstName: firstName,
    friends: [...males,...females],
    gender: gender,
    lastName: lastName,
    phone: "123456"
}
console.log(personV2);

function App() {
    return (
      <div className="App">
         <p>{firstName}</p>
         <p>{email}</p>
      </div>
    );
  }
  
export default App;