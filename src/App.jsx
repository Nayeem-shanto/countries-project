
import './App.css'
import Countries from './Components/Countries/Countries'

const fetchCountries = fetch('https://openapi.programming-hero.com/api/all')
.then(response=>response.json());

function App() {
  

  return (
    <>
      <h1 className='text-blue-600 text-2xl font-bold font-sans text-center mt-5'>Lest start the countries flag project</h1>

      <section className='w-10/12 mx-auto bg-slate-300 mt-10 p-5'>
        <Countries fetchCountries={fetchCountries}></Countries>
      </section>
    </>
  )
}

export default App
