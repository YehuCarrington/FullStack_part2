const SearchView = ({country, handleCountry}) => {
    return(
        <>
            <form>
                <div> Country: <input placeholder="Start Typing the name of a country" value={country} onChange={handleCountry} /></div>
            </form>
        </>
    )
}

export default SearchView