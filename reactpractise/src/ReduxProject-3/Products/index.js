import "./index.css"
import JsonData from "../JsonData.json"
import {useDispatch} from "react-redux"
import {incrementcart,decrementcart} from "../Redux/CartReducer"

const Products = () => {
    const dispatch = useDispatch();
    return(
        <div>
            <ul className = "unordered-list"> 
                {
                    JsonData.products.map(product => {
                        const {id,src,price,name} = product
                        return(
                            <li key = {id}>
                                <div className = "box">
                                    <img src = {src} className = "image"/>
                                    <h3>{name} | ₹{price}</h3>
                                    <div>
                                        <button className = "button-1" onClick ={() => dispatch(incrementcart({
                                            productName:product.name,
                                            productPrice:product.price
                                        }))} >Add</button>
                                        <button className = "button-1" onClick = {() => dispatch(decrementcart({
                                            productName:product.name,
                                            productPrice:product.price
                                        }))}>Remove</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Products