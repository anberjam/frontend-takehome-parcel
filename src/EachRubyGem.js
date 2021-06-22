import React, {useState} from "react"


function EachRubyGem ({name}) {
    const [selected, setSelected] = useState(false)


    function handleSaveButton (name) {
        setSelected(true)

        if (localStorage.getItem("savedGems") != undefined) {
            const previousSaved =JSON.parse(localStorage.getItem("savedGems"))
            const pSavedArray = [...previousSaved, name]
            localStorage.setItem("savedGems", JSON.stringify(pSavedArray)) }
        else 
            {localStorage.setItem("savedGems", JSON.stringify([name]))}
    }


    function handleUnsaveButton (name) {
        setSelected(false)
        const previousSaved =JSON.parse(localStorage.getItem("savedGems"))
        const pSavedArray = previousSaved.map((p)=> p != name)
        localStorage.setItem("savedGems", JSON.stringify(pSavedArray))
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