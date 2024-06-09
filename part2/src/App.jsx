import { useState } from 'react'

function DisplayPhonebook({ persons }) {
  return persons.map((person, index) => {
    return (
      <li key={index}>
        {person.name} {person.number}
      </li>
    )
  })
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1868-555-5555', id: 1 },
    { name: 'Hadas Melix', number: '1868-777-7777', id: 2 },
    { name: 'Elsa Gate', number: '1868-444-4444', id: 3 },
    { name: 'Panda Trix', number: '1868-222-2222', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newId, setId] = useState(5)

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
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
      <h2>Phonebook</h2>
      <form onSubmit={updatePersons}>
        <div> name: <input placeholder='Enter a name' value={newName} onChange={handleNewName} /> </div>
        <div> number: <input placeholder='Enter a number' value={newNumber} onChange={handleNewNumber} /></div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayPhonebook persons={persons} />

    </div>
  )
}

export default App