import {useState} from "react"

const UseState_1 = () => {
    const [count,setCount] = useState(0)
    return(
        <div>
            <button onClick = {() => (setCount(count+1))}>+</button>
            <h1>{count}</h1>
            <button onClick = {() => (setCount((prevCount)=>prevCount-2))}>-</button>
        </div>
    )
}

export default UseState_1