import { useFetch } from "../../hooks/useFetch"
import { useForm } from "../../hooks/useForm"
import { CardPublic } from "./CardPublic"

export const FormBusqueda =  ({title}) => {
  const {data, getData, isLoading, error} = useFetch()
  const {formulario} = useForm()
  const createOnSubmit = async (ev) =>{
    ev.preventDefault()
  try {
     const url = `http://localhost:5001/api/v1/search/${title}`
    console.log(url, "url title")
    const resp = await getData(url)
    console.log(resp, "resp en title")
} catch (error) {
        console.log(error)
    }

  }
   

    return (
      <> 
      <form  id="buscadorRecetas"
            name="buscadorRecetas"
            onSubmit={createOnSubmit} > 
            
          <input type="text" id="buscador" name="buscador" placeholder="Busca una receta" />
          <input type="submit" value="buscar" />
      </form>
       <section>
        {
          error
              ?
              <h3>no se han encontrado recetas</h3>
              :
          <CardPublic />
           }
      </section> 
      </>
    
  )

}
