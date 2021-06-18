import React, {useState, useEffect} from "react"
import Search from "./Search"
import EachRubyGem from "./EachRubyGem"

function RubyGemResults () 
{
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/search.json?query=${query}`)
        .then(r=> r.json())
        .then(r=>setResults(r))
    }, [query])

    return (
        <div>
        <Search setQuery={setQuery}/>
        <EachRubyGem results = {results} />
        </div>
    )
}

export default RubyGemResults