import "./index.css"
import {useState,useMemo,useEffect} from "react"


const UseMemo_1 = () => {
    const [number,setNumber] = useState(0);
    const [dark,setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    },[number])

    const themeChange = useMemo(() => {
        return{
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black",
        }
    },[dark]);

    useEffect(() => {
        console.log("theme changed");
    },[themeChange]);

    return(
        <div className = "container">
            <input type = "number" name = "number" id = "number" value = {number}onChange = {(e) => setNumber(Number(e.target.value)) }/>
        <br/>
        <div>
            <button onClick = {() => setDark(!dark)}>change theme</button>
        </div>
        <h2 style = {themeChange}>the number : ${doubleNumber} </h2>
        </div>  
    )

}
const slowFunction = (number) => {
    for (let index = 0; index < 100000000; index++) {}
    return number * 2;
}
  
export default UseMemo_1