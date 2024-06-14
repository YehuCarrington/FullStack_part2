import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayPhonebook from './components/DisplayPhonebook'
import PhonebookForm from './components/PhonebookForm'
import SearchForm from './components/SearchForm'
import DisplaySeatchResult from './components/DisplaySearchResult'
import phoneService from './services/comms'

const App = () => {

  useEffect(() => {

    //Lets pull the data from the server using the get entries function
    phoneService.getEntries()
      .then(entries => {
        console.log(`Entries: ${entries}`);
        setPersons(entries);
        console.log('persons: ', persons);
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

//Task List: 
/*
*  2.12: Store the phone numbers to the backend
*  2.13: Extract the code that handles communication onto it's own module
*  2.14: Allow the users to delete numbers from the server with a dedicated delete button utilize window.confirm
*  2.15: Change the functionality so that If a number is already added, you can update/replace the number with the next one
*/

//Plan of action
/*
* Extracting communication to its own module should be done from the beginning
* We've been asked to implement the above functionalities, broken down into units we have the following
* storeFunction <-- Stores number to the backend (updates the json)
* deleteFunction <-- Removes items from the backend 
* updateFunction <-- Checks the list for the entry if its there, updateFunction else do storeFunction
* 
*/