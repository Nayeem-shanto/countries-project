import { use } from "react"
import Country from "./Country";

export default function Countries({fetchCountries}){
    const allCountries = use(fetchCountries)
    const countries = allCountries.countries;
    console.log(countries)
    return (
        <div>
            <h3 className="text-center text-4xl font-bold mb-5">Total Country: {countries.length}  </h3>

            <div className="grid grid-cols-3 gap-4 ">
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>
    )
}