import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterName, setNewFilterName] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    };

    const handleFilterNameChange = (event) => {
        setNewFilterName(event.target.value)
    };

    const addPerson = (event) => {
        event.preventDefault();
        const userExists = persons.filter(person => person.name === newName);

        if(userExists.length) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        const newPerson = {
            name: newName,
            number: newNumber
        };

        axios
            .post('http://localhost:3001/persons', newPerson)
            .then(response => {
                setPersons(persons.concat(response.data));
                setNewName('');
                setNewNumber('');
            })
    };

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filterName} onChange={handleFilterNameChange} />
            <h3>add a new</h3>
            <PersonForm actions={{
                addPerson,
                newName,
                newNumber,
                handleNameChange,
                handleNumberChange
            }} />

            <h3>Numbers</h3>

            <Persons persons={persons} filterName={filterName} />
        </div>
    )
};

export default App
