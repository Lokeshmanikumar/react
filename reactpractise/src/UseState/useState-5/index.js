import {useState} from "react"

const UseState_5 = () => {
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    /* const changeUserName = (e) => {
        setUserName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    } */

    const handleInputChange = (e,name) => {
        if (name === "firstName") {
            setUserName(e.target.value)
        }else if (name === "email"){
            setEmail(e.target.value)
        }
        else if (name === "password"){
            setPassword(e.target.values)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let userObj = {
            userName : userName,
            email:email,
            password:password

        }
    }

    return(
        <form onSubmit = {handleSubmit} > 
            <label htmlFor = "firstName">UserName</label>
            <br/>
            <input value = {userName} type = "text" name = "userName" id = "firstName" palceholder = "enter your name" onChange = {(e) => handleInputChange(e,"userName")}/>
            <br/>
            <br/>
            <label htmlFor="email">Email</label>
            <br/>
            <input value = {email} type = "email" name = "email" id = "email" palceholder = "enter your email" onChange = {(e) => handleInputChange(e,"email")}/>
            <br/>
            <br/>
            <label htmlFor ="password">Password</label>
            <br/>
            <input  value = {password} type = "password" name = "password" id = "password" palceholder = "enter your password" onChange = {(e) => handleInputChange(e,"password")}/>
            <br/>
            <br/>
            <button>Submit</button>
        </form>
    )
}

export default UseState_5