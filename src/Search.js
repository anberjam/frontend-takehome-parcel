import React, {useState} from "react"

function Search ({setSearch}) {
    const [query, setQuery] = useState("")


    function handleSearchTerm (event) {
        setQuery(event.target.value)
    }

    function whenSubmitted (event) {
        event.preventDefault()
        setSearch(query)
    }

    return (
        <div className = "form-group">
        <form onSubmit={whenSubmitted}>
        <label htmlFor="search"> What are you looking for? </label>
        <input 
        id = "search" 
        type="text" 
        placeholder="Type Ruby Gem Name Here.." 
        onChange = {handleSearchTerm} 
        value = {query} 
        autoComplete="off">
        </input>
        <button id="search" type="submit">I'm Feeling Lucky!</button>
        </form>
        </div>
    )
}

export default Search