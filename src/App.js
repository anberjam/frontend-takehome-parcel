import React, {useState, useEffect} from "react"
import Header from "./Header"
import RubyGemResults from "./RubyGemResults"
import Search from "./Search"
import Navigation from "./Navigation"
import SavedResults from "./SavedResults"

function App () {
    const [search,setSearch] = useState("")
    const [results, setResults] = useState([])
    const [savedGems, setSavedGems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/search.json?query=${search}`)
        .then(r=> r.json())
        .then(r=>setResults(r))
    }, [search])



return (
   <div>
    <Header />
    <Navigation />
    <SavedResults savedGems = {savedGems} setSavedGems = {setSavedGems}/>
    <Search setSearch={setSearch}/>
    <RubyGemResults results = {results} savedGems = {savedGems} setSavedGems = {setSavedGems}/>
    </div>  
)

}

export default App