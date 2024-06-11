const SearchForm = ({searchValue, handleSearchValue}) => {
    return (
        <div>
            <form>
                <div> Search: <input placeholder='Search Phonebook' value={searchValue} onChange={handleSearchValue}/> </div>
            </form>
        </div>
    )
}

export default SearchForm