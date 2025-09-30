import React, { useState } from "react";

const Country = ({ country, handleVisitedCountries, handleFlags }) => {
    console.log(handleFlags);
  const [visited, setvisited] = useState(false);

  const handleVisited = () => {
    /* conditional rendering use kore toggling */
    /* toggling */
    /* if(visited){
            setvisited(false)
        }
        else{
            setvisited(true);
        } */
    /* option 2 for toggling */
    //    setvisited(visited ? false : true)

    /* option 3 for toggling */
    setvisited(!visited);
    handleVisitedCountries(country);
  };
  console.log(country);
  return (
    /* conditional rendering kore visited country te css add kora hoice . ek sathe normal class and conditional css class use korte hole template string use kore er moddhe korte hobe*/
    <div className={`border-2 p-4 rounded-2xl ${visited && "bg-amber-100"}`}>
      <img
        className="w-full h-[200px] rounded-2xl mb-4"
        src={country?.flags?.flags?.png}
        alt={country.flags.flags.alt}
      />
      <div className=" text-center font-semibold text-xl">
        <h3>Country Name: {country.name.common} </h3>
        <h3>Capital : {country.capital.capital}</h3>
        <h3>Population: {country.population.population}</h3>
        <h3>Region: {country.region.region}</h3>
        <h3>
          Area: {country.area.area}{" "}
          {country.area.area > 300000 ? "large Country" : "Small Country"}
        </h3>
        <div className="flex gap-4 justify-center mt-2">
          <button onClick={handleVisited} className="btn btn-warning">
          {visited ? "Visited" : "Not-Visited"}
        </button>
        <button onClick={()=> handleFlags(country?.flags?.flags?.png)} className="btn btn-warning">Flag</button>
        </div>
      </div>
    </div>
  );
};

export default Country;
