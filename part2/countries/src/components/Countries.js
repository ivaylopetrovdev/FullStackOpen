import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Countries = ({countries, filterName, setFilterName}) => {
    const [weather, setWeather] = useState({});
    const [showCountries, setCountries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const filteredCountries = countries.filter(c => c.name.toLowerCase().search(filterName) !== -1);
        setCountries(filteredCountries);
        if (filteredCountries.length > 10) {
            setError( 'Too many matches, specify another filter');
        } else {
            setError( null);
        }

        if (filteredCountries.length === 1) {
            axios
                .get(`http://api.apixu.com/v1/current.json?key=8534a45ba87e4fdbb37135915193107&q=${filteredCountries[0].capital}`)
                .then(response => {
                    setWeather(response.data.current);
                })
        }
    }, [countries, filterName]);

    return (
        <>
            {filterName ? (
                <>
                    {error ? (<div>{error}</div>) : null}
                    {(showCountries.length >= 2 && showCountries.length <= 10) ? showCountries.map(c => (
                        <div key={c.name}>
                            {c.name}
                            &nbsp;<button onClick={() => setFilterName({value: c.name.toLowerCase()})}>
                                show
                            </button>
                        </div>
                    )) : null}
                    {(showCountries.length === 1) ? (
                        <>
                            <h2>{showCountries[0].name}</h2>
                            <div>capital {showCountries[0].capital}</div>
                            <div>population {showCountries[0].population}</div>
                            <h4>languages</h4>
                            <ul>
                            {showCountries[0].languages.map(l => (<li key={l.name}>{l.name}</li>))}
                            </ul>
                            <img src={showCountries[0].flag} width="150" height="100" alt={showCountries[0].flag} />
                            <h4>Weather in {showCountries[0].capital}</h4>
                            {(showCountries[0].capital && weather) ? (
                                <>
                                    <div><strong>temperature:</strong> {weather.temp_c} Celsius</div>
                                    <div>
                                        <img src={weather.condition && weather.condition.icon} width="64" height="64" alt={weather.condition && weather.condition.icon} />
                                    </div>
                                    <div><strong>wind:</strong> {weather.wind_kph} kph, direction {weather.wind_dir}</div>
                                </>
                            ) : null}
                        </>
                    ) : null}
                </>
            ) : null}
        </>
    )
};

export default Countries
