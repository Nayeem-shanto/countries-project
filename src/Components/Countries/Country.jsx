import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div className='border-2 p-4 rounded-2xl '>
            <img className='w-full h-[200px] rounded-2xl mb-4' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Country Name: {country.name.common} </h3>
            <h3>Capital : {country.capital.capital}</h3>
            <h3>Population: {country.population.population}</h3>
            <h3>Region: {country.region.region}</h3>
            <h3>Area: {country.area.area}</h3>
        </div>
    );
};

export default Country;