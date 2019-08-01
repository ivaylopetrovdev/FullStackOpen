import React, { useState, useEffect } from 'react';
import personsService from '../services/persons'
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

    const removePerson = (id) => {
        personsService
            .deleteById(id)
            .then(() => {
                setPersons(persons.filter((person) => person.id !== id));
            })
    };

    const update = (person) => {
        const updatedPerson = {...person, number: newNumber};
        personsService
            .update(updatedPerson.id, updatedPerson)
            .then(returnedPerson => {
                setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson));
                setNewName('');
                setNewNumber('');
            })
    };

    const addPerson = (event) => {
        event.preventDefault();
        const userExists = persons.filter(person => person.name === newName);

        if(userExists.length) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                return update(userExists[0]);
            }
            return;
        }

        const newPerson = {
            name: newName,
            number: newNumber
        };

        personsService
            .create(newPerson)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson));
                setNewName('');
                setNewNumber('');
            })
    };

    useEffect(() => {
        personsService
            .getAll()
            .then(allPersons => {
                setPersons(allPersons)
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

            <Persons persons={persons} filterName={filterName} removePerson={removePerson} />
        </div>
    )
};

export default App
