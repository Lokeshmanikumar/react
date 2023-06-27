import "./index.css"
import {useState,useEffect,useRef} from "react"

const UseRef_2 = () => {
    const [firstName,setFirstName] = useState("");
    const inputDom = useRef("")

    useEffect(() => {
        console.log(inputDom)
    });
    
    const focus = () => {
        inputDom.current.focus();
    }

    return(
        
         <div className = "container">
            <div>   
            <input ref = {inputDom} type = "text" id = "firstName" onChange = {(e) => setFirstName(e.target.value)}/>
            <h5>Typing:{firstName}</h5>
            <button onClick = {focus}>focus</button>
            </div>
        </div>
        
    )
}
  
export default UseRef_2