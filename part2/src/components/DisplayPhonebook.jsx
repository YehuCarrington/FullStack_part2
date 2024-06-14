const DisplayPhonebook = ({ persons }) => {
    
    if (!persons) {
        return <p>Loading...</p>;
    }
    
    return persons.map((person) => {
        
        return (
            <div key={person.id}>
                <li>
                    {person.name} {person.number}
                </li>
            </div>
        )
    })
}

export default DisplayPhonebook