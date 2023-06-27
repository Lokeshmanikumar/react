import React, {useState,useEffect} from "react";
import usePageTitle from "../PageHook"

const PageTitleOne = () => {
    const [count,setCount] = useState(0)
    usePageTitle(count)
    return(
        <div>
            <button onClick = {() => setCount(count+1)}>
                count - {count}
            </button>
        </div>
    )
}

export default PageTitleOne