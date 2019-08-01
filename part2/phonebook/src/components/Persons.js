import React from 'react'
import Person from './Person'

const Persons = ({persons, filterName, removePerson}) => {
    return (
        <table>
            <tbody>
            {persons
                .filter(p => p.name.toLowerCase().search(filterName) !== -1)
                .map(({name, number, id}) => <Person name={name} id={id} number={number} key={name} removePerson={removePerson} />)
            }
            </tbody>
        </table>
    )
};

export default Persons
