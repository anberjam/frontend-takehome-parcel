import React, {useState, useEffect} from "react"
import Header from "./Header"
import RubyGemResults from "./RubyGemResults"
import Search from "./Search"
import Tabs from "./Navigation/Tabs"
import SavedResults from "./SavedResults"
import app from "./app.css"


function App () {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
  

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/search.json?query=${search}`)
        .then(r=> r.json())
        .then(r=>setResults(r))
        }, 
      [search])
    
    
    return (
        <div>
          <Header />
            <div>

              <Tabs> 
                <div label="Explore Ruby Gems"> 
         
                    <Search setSearch={setSearch}/>

                    <RubyGemResults results = {results}/>
                </div> 

                <div label="My Saved Ruby Gems"> 

                    <SavedResults />
      
                </div> 
              </Tabs> 
            </div>
        </div>  
    )

}

export default App