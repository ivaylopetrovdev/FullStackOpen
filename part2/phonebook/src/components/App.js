import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterName, setNewFilterNAme] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    };

    const handleFilterNameChange = (event) => {
        setNewFilterNAme(event.target.value)
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

        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <div>filter shown with <input value={filterName} onChange={handleFilterNameChange}/></div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>

            {persons
                .filter(p => p.name.toLowerCase().search(filterName) !== -1)
                .map(p => <div key={p.name}>{p.name} {p.number}</div>)
            }
        </div>
    )
};

export default App
