import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import Countries from './Countries';

const App = () => {
    const [filterName, setNewFilterNAme] = useState('');
    const [countries, setCountries] = useState([]);

    const handleFilterNameChange = (event) => {
        setNewFilterNAme(event.value || event.target.value)
    };

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, []);

    return (
        <div>
            <Filter value={filterName} onChange={handleFilterNameChange} />
            <Countries countries={countries} filterName={filterName} setFilterName={handleFilterNameChange} />
        </div>
    )
};

export default App
