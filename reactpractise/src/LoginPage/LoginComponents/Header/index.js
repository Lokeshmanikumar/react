import {Link} from "react-router-dom"
import "./index.css"
import {useAuth} from "../Auth"

const Header = () => {
    const {user,logout} = useAuth();
    return(
        <div>
            <ul className = "header-container">
            <li>
            <Link to = "/" className = "para">Home</Link>
            </li>
            <li>
            <Link to = "/about" className = "para">About</Link>
            </li>
            <li>
            <Link to = "/contact" className  = "para">Contact</Link>
            </li>
            <li>
            <Link to = "/projects" className  = "para">Projects</Link>
            </li>
            <li>
            <Link to = "/users" className  = "para">Users</Link>
            </li>
            </ul>
        </div>
    )
}

export default Header