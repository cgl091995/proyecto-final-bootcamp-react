import { useFetch } from "../../hooks/useFetch"
import { useForm } from "../../hooks/useForm"

export const FormBusqueda =  ({recipes}) => {

  const urlBase= import.meta.env.VITE_URL_BASE

  const {data, error, isLoading} = useFetch(`${urlBase}/api/v1`)

  const {handlerSubmit} = useForm()
   

    return (
      <> 
      <form  id="buscadorRecetas"
            name="buscadorRecetas"
            onSubmit={handlerSubmit} > 
            
          <input type="text" id="buscador" name="buscador" placeholder="Busca una receta" />
          <input type="submit" value="buscar" />
      </form>
      <section>
        {
          error
              ?
              <h3>no se han encontrado recetas</h3>
              :
          (recipes) 
           }
      </section>
      </>
    
  )
}

