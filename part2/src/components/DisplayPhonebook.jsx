const DisplayPhonebook = ({ persons }) => {
    
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