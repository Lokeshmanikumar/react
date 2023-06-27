import "./index.css"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

const Navbar = () => {
    const cartCount = useSelector((state) => state.Reducers.length)
    return(
        <div className = "navbar">
            <div className = "logo">
                <h4>Redux Toolkit</h4>
                <Link to = "/" className = "para">Products</Link>
            </div>
            <Link to = "/cart"  className = "para"><span>MY BAG </span> {cartCount} </Link>
        </div>
    )
}

export default Navbar