import React from "react"


function SavedResultItem ({savedGems, gem}) {
    function handleUnsaveButton (gem) {
        setSelected(false)
    
        const updatedSavedGems = savedGems.filter((g)=> g != gem) 
        setSavedGems (updatedSavedGems)
    
    }

    return (
        <div>
        {gem}
        <button onClick = {() => {handleUnsaveButton(gem)}}>Unsave</button>
        </div>
    )
}

export default SavedResultItem