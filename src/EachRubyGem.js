import React, {useState} from "react"


function EachRubyGem ({name, setSavedGems, savedGems, updateGemsSavedInLS}) {
const [selected, setSelected] = useState(false)


function handleSaveButton (name) {
    setSelected(true)

    setSavedGems([...savedGems, name])
    updateGemsSavedInLS([...savedGems, name])

}

function handleUnsaveButton (name) {
    setSelected(false)

    const updatedSavedGems = savedGems.filter((gem)=> gem != name) 
    setSavedGems (updatedSavedGems)
    updateGemsSavedInLS(updatedSavedGems)

}


    return (
        <div>
            <ul>
            {selected ? <button onClick = {() => handleUnsaveButton(name)}> Unsave</button> : <button onClick = {() => handleSaveButton (name)}>  Save </button>}
            &nbsp;&nbsp;&nbsp;&nbsp;{name}
            
            </ul>
        </div>
    )
}

export default EachRubyGem