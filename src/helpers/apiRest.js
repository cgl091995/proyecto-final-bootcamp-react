
/**
 * Función para hacer peticiones HTTP utilizando `fetch`. 
 * Esta función soporta los métodos `GET`, `POST`, `PUT`, y `DELETE`, y se encarga de 
 * gestionar las opciones de la solicitud según el tipo de petición.
 *
 * @param {string} url - La URL a la que se realiza la solicitud.
 * @param {string} [method="GET"] - El método HTTP a utilizar (por defecto es "GET").
 * @param {object} [body={}] - El cuerpo de la solicitud, solo se utiliza para los métodos `POST` y `PUT`.
 * @returns {Promise<object>} - Devuelve una promesa que resuelve con la respuesta en formato JSON si la solicitud es exitosa.
 * @throws {Error} - Lanza un error si la conexión falla o la respuesta no es exitosa.
 */
export const apiRest = async (url, method = "GET", body = {}) => {
    
    let options = {}
  
    if (method == 'POST' || method == 'PUT'){
        
        options={
            method,
            body: JSON.stringify(body),// Convierte el cuerpo del objeto en JSON
            mode: `cors`,
            headers:{
                "Content-Type": "application/json" // Especifica que el contenido de la solicitud es de tipo JSON
            }
        }    
    }
    else if(method =='GET' || method =='DELETE'){
        options = {
            method
        }
    }
    try {
        console.log(url, options)
        const resp= await fetch(url, options)
        
       
        if(resp.ok){
          return resp.json() // Retorna la respuesta en formato JSON si la solicitud es exitosa
        }else{
            throw('connection failed') // Lanza un error si la respuesta no es exitosa
        }
    } catch (error) {
        console.log( `ERROR: ${error}`)
            throw error 
        
    }
}