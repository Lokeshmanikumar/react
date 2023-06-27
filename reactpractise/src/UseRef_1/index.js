import "./index.css"
import {useState,useEffect,useRef} from "react"

const UseRef = () => {
    const [firstName,setFirstName] = useState("");
    const renderCount = useRef(0)

    useEffect(() => {
        renderCount.current = renderCount.current +1;
    });

    return(
        
         <div className = "container">
            <div>
            <input type = "text" id = "firstName" onChange = {(e) => setFirstName(e.target.value)}/>
            <h5>Typing:{firstName}</h5>
            <h3>hello:{renderCount.current}</h3>
            </div>
        </div>
        
    )
}
  
export default UseRef