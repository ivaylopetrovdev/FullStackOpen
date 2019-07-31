import React from 'react'

const Countries = ({countries, filterName}) => {
    const showCountries = countries.filter(c => c.name.toLowerCase().search(filterName) !== -1);
    let error = null;
    if (showCountries.length > 10) {
        error = 'Too many matches, specify another filter';
    }

    return (
        <>
            {filterName ? (
                <div>
                    {error ? (<div>{error}</div>) : null}
                    {(showCountries.length > 2 && showCountries.length <= 10) ? showCountries.map(c => (<div key={c.name}>{c.name}</div>)) : null}
                    {(showCountries.length === 1) ? (
                        <div>
                            <h2>{showCountries[0].name}</h2>
                            <div>capital {showCountries[0].capital}</div>
                            <div>population {showCountries[0].population}</div>
                            <h4>languages</h4>
                            {showCountries[0].languages.map(l => (<div key={l.name}>{l.name}</div>))}
                            <img src={showCountries[0].flag} width="100" height="100" alt={showCountries[0].flag} />
                        </div>
                    ) : null}
                </div>
            ) : null}
        </>
    )
};

export default Countries
