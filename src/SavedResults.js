import React from "react"
import SavedResultItem from "./SavedResultItem"

function SavedResults () {

    const allSavedGems = JSON.parse(localStorage.getItem("savedGems"))

    const eachSave = allSavedGems.map((gem) => <SavedResultItem key={gem} gem={gem}/> )

    return (
        <div>
            {eachSave}
        </div>
    )
}

export default SavedResults