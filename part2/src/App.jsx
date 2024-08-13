import './index.css'
import Disclaimer from './components/Disclaimer'
import SearchView from './components/SearchView'
import SearchResultView from './components/SearchResultView'
import countryService from './services/comms'
import { useEffect, useState } from 'react'

const App = () => {

  const [countryData, setCountryData] = useState([])
  const [countryName, setCountryName] = useState([])
  const [country, setCountry] = useState('')
  const [filteredCountry, setFilteredCountry] = useState([])
  const [countrySpecificData, setCountrySpecificData] = useState([])

  useEffect(() => {
    //Pulling all the data from the the server
    countryService.getAllCountries()
      .then(data => {
        setCountryData(data)
        console.log('The data in countryData is: ', data)
      })
      .catch(error => {
        //for now we will just console log again.
        console.log('The Error: ', error)
        alert('Failed to get country data, check console.')
      })
  }, [])


  useEffect(() => {

    if(countryData.length === 0) return

    //Manipuate country data to make a list of countries that can be filtered against
    const countryNameData = countryData.map(cName => cName.name.common)
    console.log('Effect run, name of Countries: ', countryNameData)
    setCountryName(countryNameData)

  }, [countryData])

  useEffect(() => {

    if(country == '' || countryName == '')
      return

    console.log('Searched country is now', country)
    const retCountry = countryName.filter((fc) => fc.toLowerCase().includes(country.toLowerCase()))
    console.log(`Filtered countries are: ${retCountry}`)
    console.log('Length is: ', retCountry.length)
    setFilteredCountry(retCountry)


    //This is run when only one country is present in the filtered countries list to return the data for that specific country.
    if(retCountry.length == 1){
      countryService.getCountryByName(retCountry)
        .then(data => {
          setCountrySpecificData(data)
          console.log(data)
          console.log('The name is: ', data.name.common)
        })
        .catch(error => {
          console.log('The Error: ', error)
          alert('Failed to get specific country data, check console.')
        })
    }
    
  }, [country])

  const handleCountry = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
  }

  return (
    <div>
      <Disclaimer/>
      <SearchView country={country} handleCountry={handleCountry}/>
      <SearchResultView countrySpecificData={countrySpecificData} filteredCountry={filteredCountry}/>
    </div>
  )
}

export default App

/*

2.18 Make an application that allows you to view information from different countries.

2.18.1 If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:
2.18.2 If there are ten or fewer countries, but more than one, then all countries matching the query are shown:
2.18.3 When there is only one country matching the query, then the basic data of the country (eg. capital and area), its flag and the languages spoken are shown:

2.19 Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:

2.20 Add to the view showing the data of a single country, the weather report for the capital of that country.

Taking into consideration the requirements, we must build a number of components

1 - Component for the search UI
2 - Component for the result UI
3 - Component for the final view (i.e the view shown when only a single result is returned)
3.1 - A component for the button view mentione in (2.19)
3.2 - A API communication file to handle accessing the API data from the https://studies.cs.helsinki.fi/restcountries/api/all or https://studies.cs.helsinki.fi/restcountries/api/name/{countryname}
3.2.1 - An API for pulling the weather data in the country capital

*/