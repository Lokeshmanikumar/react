import "./index.css"
import {useSelector} from "react-redux"
 
const Navbar = () => {
    const cartCount = useSelector((state) => state.CartReducer.cartValues.length)
    const totalPrice = useSelector((state) => state.CartReducer.totalPrice)
    return(
        <div className = "navbar">
            <button className = "button">CardItems:{cartCount}</button>
            <button className = "button">TotalPrice: {totalPrice}</button>
        </div>
    )
}

export default Navbar  