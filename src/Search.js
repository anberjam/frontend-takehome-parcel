import React, {useState} from "react"

function Search ({setQuery}) {
    const [search, setSearch] = useState("")

    function handleSearchTerm (event) {
        setSearch(event.target.value)
    }

    function whenSubmitted () {
        event.preventDefault()
        setQuery(search)
    }

    return (
        <div className = "form-group">
        <form onSubmit={whenSubmitted}>
        <label htmlFor="search"> Search Here: </label>
        <input 
        id = "search" 
        type="text" 
        placeholder="Search Ruby Gems" 
        onChange = {handleSearchTerm} 
        value = {search} 
        autoComplete="off">
        </input>
        <button type="submit">Search</button>
        </form>
        </div>
    )
}

export default Search