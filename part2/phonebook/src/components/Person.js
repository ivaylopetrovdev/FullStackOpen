import React from 'react'

const Person = ({name, number, id, removePerson}) => {
    const removePersonById = () => {
        if (window.confirm(`Delete ${name}?`)) {
            return removePerson(id);
        }
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{number}</td>
            <td><button onClick={() => removePersonById()}>delete</button></td>
        </tr>
    )
};

export default Person
