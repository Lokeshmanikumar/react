import React,{useState,useEffect} from "react";
import useFetch from "../useCustomComponent"

const URL = "https://jsonplaceholder.typicode.com/posts"
const SecondApi = () => {
    const [postData,loading,isError] = useFetch(URL)
    if(loading) {
        return <h3>loading...</h3>
    }

    if(isError){
        return <h3>something was happened</h3>
    }

    return(
        <div>
            <h1>POSTS</h1>
            <h5>{postData.map((eachUser) => {
                return <li key = {eachUser.id} >{eachUser.title}</li>
            })}</h5>
        </div>
    )
}

export default SecondApi  