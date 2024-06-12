import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayPhonebook from './components/DisplayPhonebook'
import PhonebookForm from './components/PhonebookForm'
import SearchForm from './components/SearchForm'
import DisplaySeatchResult from './components/DisplaySearchResult'

const App = () => {

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled', response.data)
        setPersons(response.data)
      })
  }, [])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [newId, setId] = useState(5)
  const [filteredPeople, setFilteredPeople] = useState([])

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchValue = (event) => {
    console.log(event.target.value)
    const searchTerm = event.target.value
    setSearchValue(searchTerm)

    //grab the list of names
    //You can grab the list of names, by mapping each name from the 
    //object into an array of names
    const peopleDB = persons.map(person => person.name)

    //grab the search term
    console.log(`The searchTerm is: ${searchTerm}`)

    //filter the list of names on the search term
    const filteredPeople = peopleDB.filter((people) => people.toLowerCase().includes(searchTerm.toLowerCase()))
    console.log(`The peopleDB are: ${peopleDB}`)
    console.log(`The filteredPeople are: ${filteredPeople}`)

    if(searchTerm === '')
      setFilteredPeople([])
    else
      setFilteredPeople(filteredPeople)



    //return the list of filtered names into an array
    //Display the list of filtered names

  }

  const updatePersons = (event) => {
    event.preventDefault()
    const personObj = { name: newName, number: newNumber, id: newId }

    if ((newName.trim().length === 0) || (newNumber.trim().length === 0))
      alert('Please enter a name AND a number')
    else {
      //We can perform the check here, lets access the array of objects
      const checkPersons = persons.map(person => person.name)
      if (checkPersons.includes(newName)) { alert(`${newName} is already in the phonebook`) }
      else {
        setPersons(persons.concat(personObj))
        setNewName('')
        setNewNumber('')
        setId(i => i + 1)
      }
    }
  }



  return (
    <div>
      <h2>Search</h2>
      <SearchForm
        searchValue={searchValue}
        handleSearchValue={handleSearchValue} />

      <h2>Search Results</h2>
      <DisplaySeatchResult filteredPeople={filteredPeople}/>

      <PhonebookForm updatePersons={updatePersons}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        newName={newName}
        newNumber={newNumber} />

      
      <h2>Numbers</h2>
      <DisplayPhonebook persons={persons} />

    </div>
  )
}

export default App