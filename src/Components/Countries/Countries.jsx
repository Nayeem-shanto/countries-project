import { use, useState } from "react";
import Country from "./Country";

export default function Countries({ fetchCountries }) {
  const allCountries = use(fetchCountries);
  const countries = allCountries.countries;
  console.log(countries);

  /* declaring a state for counting the visited country.... 
    ........ lift up te state.
    Lift up the state মানে কী?

React-এ "Lift up the state" বলতে বোঝায় —
👉 যখন দুই বা তার বেশি কম্পোনেন্টের মধ্যে একই state দরকার হয়, তখন সেই state কে তাদের common parent component এ নিয়ে যাওয়া।

অর্থাৎ, state টা child component-এ না রেখে উপরে (parent এ) তুলে রাখা, যাতে সেটা সবাই শেয়ার করতে পারে।

🔹 কেন দরকার হয়?

ধরো তোমার দুইটা child component আছে, আর দুটোতেই একই data দরকার।

যদি আলাদা আলাদা state রাখো → তাহলে mismatch বা conflict হতে পারে।

তাই state কে parent এ নিয়ে যাওয়া হয় → তারপর props দিয়ে নিচে পাঠানো হয়।
  */
 const [visitedCountries, setVisitedCountries]= useState([]);
 const handleVisitedCountries =(country)=>{
   const newVisitedCountries = [...visitedCountries, country];
   setVisitedCountries(newVisitedCountries);
    /* amra ekhane ekta state declare korsi and and ekta event handel korar jonno function likhsi but ekhane kono button nai handel use korar jonno.. tai amader ei handel function ta ke country component er moddhe props hishebe pathaite hobe..  */
 }

return (
    <div>
      <h3 className="text-center text-4xl font-bold mb-5">
        Total Country: {countries.length}{" "}
      </h3>
      <h3 className="text-center text-xl font-bold mb-5">
        Total visited Country: {visitedCountries.length}
      </h3>
      <ol className=" flex justify-between flex-wrap gap-10 text-center border-2 w-1/2 mx-auto p-4 list-decimal font-bold mb-4 rounded-xl" >
        {
            visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
        }
      </ol>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 ">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>
        ))}
      </div>
    </div>
  );
}
