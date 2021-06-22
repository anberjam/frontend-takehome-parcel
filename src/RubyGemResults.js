import React from "react"
import EachRubyGem from "./EachRubyGem"

function RubyGemResults ({results}) {

    const eachResult = results.map((result)=> <EachRubyGem key={result.name} name = {result.name}/>)


    return (
        <div>

            {eachResult}
        </div>
    )
}

export default RubyGemResults