import { useState } from 'react'

function DisplayPhonebook({persons}) {
  return persons.map((person, index) => {
    return (
      <li key={index}>
        {person.name}
      </li>
    )
  })
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const updatePersons = (event) => {
    event.preventDefault()
    const personObj = {name: newName}
    setPersons(persons.concat(personObj))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={updatePersons}>
        <div>
          name: <input placeholder='Enter a name' value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayPhonebook persons={persons}/>

    </div>
  )
}

export default App