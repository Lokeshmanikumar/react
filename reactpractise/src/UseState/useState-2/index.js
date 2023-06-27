import {useState} from "react"

const UseState_2 = () => {
    const initialObj = {
        firstName:"lokesh",
        lastName:"jitta"
    }
    const [data,setData] = useState(initialObj)

    const changeFirstName = () => {
        setData({
            ...data,
            firstName:"chintu"
        })
    }

    return(
        <div>
            <h1>FirstName: {data.firstName}</h1>
            <button onClick = {changeFirstName}>Change FirstName</button>
            <h1>SecondName: {data.lastName}</h1>
        </div>
    )
}


export default UseState_2