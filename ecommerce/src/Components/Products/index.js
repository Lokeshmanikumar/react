import {useState,useEffect} from "react";
import "./index.css"
import {useDispatch} from "react-redux"
import {increment} from "../Redux/Reducers"


const URL = "https://fakestoreapi.com/products"

const Products = () => {

    const [productsData,setProductsData] = useState([]);
    const fetchProducts = async(URL) => {
        const response = await fetch(URL)
        const data = await response.json()
        setProductsData(data)
    }
    console.log(productsData)
    useEffect(() => {
        fetchProducts(URL)
    },[])

    const dispatch = useDispatch();
    return(
    <div className = "container">
        <center>
        <ul className = "unorderedList">
            {
                productsData.map((eachProduct) => {
                    const {category,description,id,image,price,title,rating} = eachProduct
                    const {count,rate} = rating
                    return (
                        <center>
                        <li key = {id} className = "box">
                            
                            <div>
                                <img src = {image} className = "image"/> 
                                <hr className = "horizontal-line"/>
                                <h5>{title}</h5>
                                <p>₹{price}</p>   
                            </div>
                                <button className = "button" onClick ={() => dispatch(increment(eachProduct))}>Add To Cart</button>
                        
                        </li>
                        </center>
                    )
                })
            }
        </ul>
        </center>
    </div>
    )
}

export default Products