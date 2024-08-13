import axios from 'axios'
const allCountries = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'

// We only need to read from the API so all we need is a function to retrieve data.
// the API allows us to grab all the countries, and then specify countries by name

const getAllCountries = () => {
    return (
        axios.get(allCountries)
                .then(response => response.data)
                .catch(error => {
                    console.log('Failed to get the data form all countries fn', error)
                    throw error
                })
    )
}

const getCountryByName = name => {
    return(
        axios.get(`${baseUrl}/${name}`)
                .then(response => response.data)
                .catch(error => {
                    console.log(`failed to get country: ${name}`, error)
                    throw error
                })
    )
}

export default {getAllCountries, getCountryByName}