const PhonebookForm = ({updatePersons, handleNewName, handleNewNumber, newName, newNumber}) => {
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
        </div>
    )
}

export default PhonebookForm