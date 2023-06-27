import React,{useState,useEffect} from "react";
import useFetch from "../useCustomComponent"

const URL = "https://jsonplaceholder.typicode.com/users"

const FirstApi = () => {
    const [userData,loading,isError] = useFetch(URL)

    if(loading) {
        return <h3>loading...</h3>
    }

    if(isError){
        return <h3>something was happened</h3>
    }

    return(
        <div>
            <h1>UsersData</h1>
            <h5>{userData.map((eachUser) => {
                return <li key = {eachUser.id} >{eachUser.username}</li>
            })}</h5>
        </div>
    )
}

export default FirstApi