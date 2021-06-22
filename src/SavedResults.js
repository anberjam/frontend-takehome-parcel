import React from "react"
import SavedResultItem from "./SavedResultItem"

function SavedResults ({savedGems}) {

    const eachSave = savedGems.map((gem)=> <SavedResultItem key={gem} gem={gem} savedGems={savedGems}/> )

    return (
        <div>
            {eachSave}
        </div>
    )
}

export default SavedResults