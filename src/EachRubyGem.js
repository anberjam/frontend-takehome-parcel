import React, {useState} from "react"


function EachRubyGem ({name, setSavedGems, savedGems}) {
const [selected, setSelected] = useState(false)


function handleSaveButton (name) {
    setSelected(true)
    setSavedGems([...savedGems, name])

}

function handleUnsaveButton (name) {
    setSelected(false)
    const updatedSavedGems = savedGems.map((gem)=> gem != name) 
    setSavedGems (updatedSavedGems)
}


    return (
        <div>
            <ul>
            <li>{name} </li>
            {selected ? <button onClick = {handleUnsaveButton}> Unsave</button> : <button onClick = {handleSaveButton}> Save </button>}
            
            </ul>
        </div>
    )
}

export default EachRubyGem