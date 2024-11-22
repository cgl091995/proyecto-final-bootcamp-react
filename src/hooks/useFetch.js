import { useEffect, useState } from "react"  
import { apiRest } from "../helpers/apiRest"

/**
 * Hook personalizado para realizar peticiones HTTP y gestionar el estado de la respuesta.
 * Este hook se encarga de gestionar los estados de la petición (cargando, éxito, error) 
 * y facilita la obtención de datos desde un API.
 *
 * @param {string} [url=""] - La URL a la que se realizará la petición. Por defecto es una cadena vacía.
 * @param {string} [method='GET'] - El método HTTP a utilizar. Puede ser `GET`, `POST`, `PUT`, `DELETE`.
 * @param {object} [body={}] - El cuerpo de la solicitud. Solo se utiliza para los métodos `POST` y `PUT`.
 * @returns {object} - Un objeto con los siguientes valores:
 *   - `data`: Los datos obtenidos de la solicitud.
 *   - `error`: El error ocurrido durante la solicitud, si lo hay.
 *   - `isLoading`: Un valor booleano que indica si la solicitud está en progreso.
 *   - `getData`: Función que permite realizar una nueva solicitud.
 */
export const useFetch = (url="", method = 'GET', body = {}) => {


   
    const [data,setData]= useState([]) // Datos obtenidos de la API
    const [error, setError] = useState(null) //Error de la solicitud (si existe)
    const [isLoading, setIsLoading] = useState(true) //Estado de carga (cargando o no)

    /**
     * Función para obtener datos desde la API utilizando `apiRest`.
     * Permite realizar peticiones personalizadas.
     *
     * @param {string} [customurl=url] - La URL personalizada para la solicitud. Si no se pasa, se usa la URL por defecto.
     * @param {string} [custommethod=method] - El método HTTP personalizado. Si no se pasa, se usa el método por defecto.
     * @param {object} [custombody=body] - El cuerpo de la solicitud personalizada. Si no se pasa, se usa el cuerpo por defecto.
     * @returns {Promise<object>} - Devuelve los datos obtenidos de la solicitud.
     * @throws {Error} - Lanza un error si la solicitud falla.
     */

        const getData=async(customurl = url, custommethod = method, custombody = body)=>{
            try{    

                // Realiza la solicitud a la API
                const data = await apiRest(customurl, custommethod, custombody)

                // Actualiza los estados con los datos obtenidos
                setData(data)   
                setError(null) // Resetea el error
                setIsLoading(false) // Termina el estado de carga
                return data
            }catch (error) {
                console.log(error)
                setError(error)
                setIsLoading(true) // Se mantiene en estado de carga si hay error
                throw error
            }
        
        }  

    // Llamamos a la función `getData` al cargar el componente    
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




   


