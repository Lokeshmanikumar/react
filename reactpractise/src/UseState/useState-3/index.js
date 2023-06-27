import {useState} from "react"
const UseState_3 = () => {
    const obj = [
        {
            id:1,
            firstName:"Lokesh",
            lastName:"jitta"
        },
        {
            id:2,
            firstName:"chintu",
            lastName:"jitta"
        },
        {
            id:3,
            firstName:"honey",
            lastName:"Bandaru"
        }
    ]
    const [data,setData] = useState(obj)
 
    const Delete = (id) => {
        const filterData = data.filter((eachItem) => {return eachItem.id !== id})
        setData(filterData)
    }
    return(
        <ul>
            {
                data.map((eachUser) => {
                    const {id,firstName,lastName} = eachUser
                    return(
                        <li>
                            <h1>{firstName}  {lastName}</h1>
                            <button  onClick = {() => Delete(id)} >Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default UseState_3