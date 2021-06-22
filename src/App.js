import React, {useState, useEffect} from "react"
import Header from "./Header"
import RubyGemResults from "./RubyGemResults"
import Search from "./Search"
import Tabs from "./Navigation/Tabs"
import SavedResults from "./SavedResults"
import app from "./app.css"


function App () {
    const [search,setSearch] = useState("")
    const [results, setResults] = useState([])
    const [savedGems, setSavedGems] = useState([])

  

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/search.json?query=${search}`)
        .then(r=> r.json())
        .then(r=>setResults(r))
    }, [search])
    
    function updateGemsSavedInLS (savedGems) {
      localStorage.setItem("savedGems", JSON.stringify(savedGems))
    }


    return (
        <div>
       <Header />
       <div>

     <Tabs> 
       <div label="Explore Ruby Gems"> 
         
    <Search setSearch={setSearch}/>
    <RubyGemResults updateGemsSavedInLS={updateGemsSavedInLS} results = {results} savedGems = {savedGems} setSavedGems = {setSavedGems}/>
       </div> 

       <div label="My Saved Ruby Gems"> 

    <SavedResults savedGems = {savedGems} setSavedGems = {setSavedGems}/>
      
       </div> 
     </Tabs> 
    </div>
    </div>  
)

}

export default App