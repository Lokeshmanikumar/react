import {useParams} from "react-router-dom"
import UserData from "../UserData"
import "./index.css"

const UsersDetails = () => {
    const {userId} = useParams();
    const userDetailsData = UserData.find((eachUser) => eachUser.id == userId)
    return(
        <div>
        <h1 className = "para-3">UserDetails</h1>
        <div className = "margin">
            <div className = "box">
            <h1 className = "para-4">{userDetailsData.name}</h1>
            <h3 className = "para-4">{userDetailsData.email}</h3>
            </div>
        </div>
        </div>
    )
}
export default UsersDetails