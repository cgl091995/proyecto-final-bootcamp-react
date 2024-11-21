import { useEffect, useState } from "react"  
import { apiRest } from "../helpers/apiRest"


export const useFetch = (url="", method = 'GET', body = {}) => {
   
    const [data,setData]= useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

        const getData=async(customurl = url, custommethod = method, custombody = body)=>{
            try{    
                const data = await apiRest(customurl, custommethod, custombody)
               
                setData(data)   
                setError(null)
                setIsLoading(false)
                return data
            }catch (error) {
                console.log(error)
                setError(error)
                setIsLoading(true)
                throw error
            }
        
        }  

    useEffect(()=>{    
             getData()
    }, [])

   

    return {
        data,
        error,
        isLoading,
        getData
       
       }
}




   


