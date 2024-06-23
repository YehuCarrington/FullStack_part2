const DisplayPhonebook = ({ persons, deletePerson }) => {
    
    if (!persons) {
        return <p>Loading...</p>;
    }
    
    return persons.map((person) => {
        return (
            <div key={person.id}>
                <li>
                    {person.name} {person.number} &nbsp;
                    <button onClick={() => {deletePerson(person, person.id)}}>delete</button>
                </li>
            </div>   
        )
    })
}

export default DisplayPhonebook