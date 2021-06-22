import React from "react"
import EachRubyGem from "./EachRubyGem"

function RubyGemResults ({results, savedGems, setSavedGems, updateGemsSavedInLS}) 
{

    const eachResult = results.map((result)=> <EachRubyGem key={result.name} updateGemsSavedInLS={updateGemsSavedInLS} name = {result.name} setSavedGems = {setSavedGems} savedGems = {savedGems}/>)





    return (
        <div>

   {eachResult}
        </div>
    )
}

export default RubyGemResults