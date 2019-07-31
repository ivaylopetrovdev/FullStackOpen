import React from 'react'
import Person from './Person'

const Persons = ({persons, filterName}) => {
    return (
        <table>
            <tbody>
            {persons
                .filter(p => p.name.toLowerCase().search(filterName) !== -1)
                .map(({name, number}) => <Person name={name} number={number} key={name} />)
        }
            </tbody>
        </table>
    )
};

export default Persons
