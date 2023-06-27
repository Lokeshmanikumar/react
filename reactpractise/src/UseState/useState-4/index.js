import {useState} from "react"

const useState_4 = () => {
    const [showData,setShowData] = useState(false)
    const button = () => {
        setShowData((!showData))
    }
    return(
        <div className = "container">
        <button onClick = {button}>{showData? "hide":"show"}</button>
        {showData && <p> 
        programmes in New York City and Washington DC. | Photo Credit: Twitter@PMOIndia
        Prime Minister Narendra Modi’s visit to Washington this week will reinforce shared
        democratic “values” between India and the United States, he said as he left for New York and Washington, 
        and said that the  “there is an unprecedented trust” between the two countries today. 
        </p>}
        </div>
    )
}

export default useState_4