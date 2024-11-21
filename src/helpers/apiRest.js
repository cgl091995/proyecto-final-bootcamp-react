
export const apiRest = async (url, method = "GET", body = {}) => {
    
    let options = {}
    // const url= import.meta.env.URL_BASE
    // console.log(url, "url apiRest")
    // console.log(method, "method apiRest")
    // console.log(body, "apiRest")
    if (method == 'POST' || method == 'PUT'){
        
        options={
            method,
            body: JSON.stringify(body),
            header:{
                "Content-Type": "application/json"
            }
        }    
    }
    else if(method =='GET' || method =='DELETE'){
        options = {
            method
        }
    }
    try {
        const resp= await fetch(url, options)
       
        if(resp.ok){
          return resp.json()
        }else{
            throw('connection failed')
        }
    } catch (error) {
        console.log( `ERROR: ${error}`)
            throw error
        
    }
}