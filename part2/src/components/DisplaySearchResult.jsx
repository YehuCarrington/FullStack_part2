const DisplaySeatchResult = ({filteredPeople}) => {
    
    return filteredPeople.map((filteredPerson, i) => {
        return (
            <div key={i}>
                <li>
                    {filteredPerson}
                </li>
            </div>
        )
    })
}

export default DisplaySeatchResult