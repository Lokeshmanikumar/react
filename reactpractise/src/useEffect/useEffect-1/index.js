import {useState,useEffect} from "react"

const UseEffect_1 = () => {
    const [pageWidth,setPageWidth] = useState(window.innerWidth)
    useEffect(() => {
        const resizeHandler =  () => {
            setPageWidth(window.innerWidth)
        };
        window.addEventListener("resize",resizeHandler)
        return () => {
            window.removeEventListener("resize",resizeHandler)
        }
    })
    return(
        <div>
            <h1>USE EFFECT</h1>
            <h1>{pageWidth}</h1>
        </div>
    )
}

export default UseEffect_1