import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate("/Submit")
    }

    return(
        <div className = "container">
            <h1>Home</h1>
            <button onClick = {navigateToLogin} >SubmitForm</button>
        </div>
    )
}

export default Home 