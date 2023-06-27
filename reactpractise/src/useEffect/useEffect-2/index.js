import {useState,useEffect} from "react"

const UseEffect_2 = () => {
    const [usersData,setUsersData] = useState([]);
    const [loading,setLoading] = useState(false)
    const [isError,setIsError] = useState({status:false,msg:""})
    const URL = "https://jsonplaceholder.typicode.com/users"
    
    const fetchUsersData = async(URL) => {
      setLoading(true)
       try{
        const response = await fetch(URL)
        const data = await  response.json()
        setUsersData(data)
        setLoading(false)
     
       }catch(error){
        setLoading(false)
        setIsError({status:true,msg:error.message})
       }
    }

    useEffect(() => {
        fetchUsersData(URL);
    },[])


    if (loading) {
        return <h1>Loading...</h1>
    }

    if (isError.status){
        return <h1>{isError.msg}</h1>
    }


    return(
        <div>
            {
               usersData.map((eachUser) => {
                    const {id,name,email} = eachUser
                    return <li key = {id}>
                        <div>{name}</div>
                        <div>{email}</div>
                    </li>
               }) 
            }
        </div>
    )
}

export default UseEffect_2