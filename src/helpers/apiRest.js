
export const apiRest = async (url, method = "GET", body = {}) => {
    let options = {}
 
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
        // console.log(resp, "apiRest")
        if(resp.ok){
          return resp.json()
        }else{
            throw('connection failed')
        }
    } catch (error) {
        console.log(error)
            throw error
        
    }
}