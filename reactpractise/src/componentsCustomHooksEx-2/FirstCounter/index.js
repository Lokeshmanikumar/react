 import useCounter from "../CustomHook"

const FirstCounter = () => {
    const [count,increment,decrement,reset] = useCounter(10);
    return(
        <div>
            <h1>Count: {count}</h1>
            <div>
                <button onClick = {increment}>Increment</button>
                <button onClick = {decrement}>Decrement</button>
                <button onClick = {reset}>Reset</button>
            </div>
        </div>
    )
}

export default FirstCounter