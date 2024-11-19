import { useEffect, useState } from "react"  
import { apiRest } from "../helpers/apiRest"


export const useFetch = (url, method = {}, body = {}) => {

    const [data,setData]= useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

        const getData=async()=>{
            try{    
            const data = await apiRest(url, method, body)
            setData(data)   
            setError(null)
            setIsLoading(false)
            }catch (error) {
            console.log(error)
            setError(error)
            setIsLoading(true)
            }
        }   
    useEffect(()=>{    
             getData()
    }, [])

   

    return {
        data,
        error,
        isLoading
       }
}




   


