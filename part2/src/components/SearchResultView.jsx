const SearchResultView = ({countrySpecificData, filteredCountry, showCountryView}) => {

    if(filteredCountry.length == 0 ){
        return(
            <div>
                <p>
                    That country does not exist in this list
                </p>
            </div>
        )
    }
        if(filteredCountry.length == 1){
            return(
                <div>
                    <h2>
                       Name: {countrySpecificData.name?.common || "No name available"}
                    </h2>
                    <p>
                        Capital: {countrySpecificData.capital}
                    </p>
                    <p>
                        Area: {countrySpecificData.area} Km<sup>2</sup>
                    </p>
                    <p>
                        Region: {countrySpecificData.region}
                    </p>
                </div>
            )
        }
    if(filteredCountry.length > 10){
        return (
            <div>
                <p>Please make your search more specific.</p>
            </div>
        )
    } 
    if (filteredCountry.length > 0 && filteredCountry.length <= 10 ){
        return filteredCountry.map((filteredCountries, i) => {
            return (
                <div key={i}>
                    <li>
                        {filteredCountries}
                        <button onClick={showCountryView}>See Details</button>
                    </li>
                </div>
            )
        })
    }


}

export default SearchResultView