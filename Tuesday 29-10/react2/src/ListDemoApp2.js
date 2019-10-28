import React, { useState } from "react";

function MemberTable({ members }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <TableItems members={members} />
            </tbody>
        </table>
    );
}

function MemberDemo(props) {
    return (
        <div>
            <h4>All Members</h4>
            <MemberTable members={props.members} />
        </div>
    );
}

function TableItems({ members }) {
    const tableItems = members.map((n, i) => <TableItem key={i} name={n.name} age={n.age} />);
    return tableItems;
}

function TableItem(props) {
    return <tr><th>{props.name}</th><th>{props.age}</th></tr>
}

export default function App() {
    const initialMembers = [{ name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];
    const [members, setMembers] = useState(initialMembers)

    return (<MemberDemo members={members} />);
}


//List and keys questions:

/*
Q: What is the purpose of the key value, which must be given to individual rows n a react list?
A: The purpose is to have an unique identifier of the specifc element, so that if changes are made
    the virtual DOM can pickup specifc changes and then change them individually instead of remaking
    the entire DOM for a single change.


*/

