import "./index.css"
import React,{useState,useCallback,useMemo } from "react";
import ButtonComponent from "../ButtonComponent"
import TitleComponent from "../TitleComponent"
import CountComponent from "../CountComponent"


const  ParentComponent = () => {
    const [age,setAge] = useState(0);
    const [salary,setSalary] = useState(7000);

    const incrementAge = useCallback(() => {
        setAge(age+1)
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary+1000)
    },[salary]);

    return(
        <div className = "container">
            <TitleComponent/>
            <CountComponent text = {"age"} number = {age}/>
            <ButtonComponent clickHandler = {incrementAge}>increment age</ButtonComponent>
            <CountComponent text = {"salary"} number = {salary}/>
            <ButtonComponent clickHandler = {incrementSalary}>increment salary</ButtonComponent>
        </div>
    )
};

export default ParentComponent 