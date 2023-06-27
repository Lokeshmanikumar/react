import "./index.css"
import {useSelector,useDispatch} from "react-redux" 
import {remove} from "../Redux/Reducers"

const Cart = () => {
    const products = useSelector(state => state.Reducers)
    const dispatch = useDispatch();
    return(
        <div className = "container">
            <ul className = "unorderedList">
                {
                    products.map((eachItem) => {
                        const {category,description,id,image,price,title,rating} = eachItem
                        return(
                            <center>
                            <li className = "box-1">
                                <div>
                                <img src = {image} className = "image"/>
                                <hr className = "horizontal-line"/>
                                <h5>{title} <h3>₹{price}</h3></h5>
                                </div>
                                <button className = "button-1" onClick = {() => dispatch(remove(id))}>Remove</button>
                            </li>
                            </center>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Cart