import "./index.css"
import {useAuth} from "../Auth"
import {useState} from "react"

const Login = () => {
    const {login} = useAuth()
    const [name,setName] = useState("")
    return(
        <div className = "container">
        <div className = "box-1">
            <h1 className = "para-3">Login</h1>
            <div>
            <label id = "login">UserName</label>
            <br/>
            <input className = "input" value = {name} type = "text" id = "login" placeholder = "UserName"  onChange = {(e) => setName(e.target.value)}/>
            </div>
            <br/>
            <button onClick = {() => login(name)}    className = "button">login</button>
        </div>
        </div>
    )
}

export default Login
