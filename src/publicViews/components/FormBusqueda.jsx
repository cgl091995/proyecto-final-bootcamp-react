
import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { CardPublic } from "./CardPublic"


export const FormBusqueda =  ({title}) => {
  
  const [buscador, setBuscador] = useState("")
  const {data, getData, isLoading, error} = useFetch()
  const recipes = Array.isArray(data?.recipes) ? data?.recipes?.[0] : data?.recipes;
  
  const createOnSubmit = async (ev) =>{
    ev.preventDefault()
   
    try {
      // console.log(title, "titulo receta en form busqueda")
      const url = `${import.meta.env.VITE_URL_BASE}/api/v1/search/${buscador}`
      console.log(url, "url title")
      const resp = await getData(url)
      console.log(resp, "resp en title")
    } catch (error) {
          console.log(error)
      }
  }
  const createOnChange = async (ev) => {
    ev.preventDefault()
    setBuscador(ev.target.value)
  }
   
    return (
      <>
      <form id="buscadorRecetas" name="buscadorRecetas" onSubmit={createOnSubmit}>
        <input type="text" id="buscador" name="buscador" placeholder="Busca una receta" value={buscador} onChange={createOnChange} />
        <input type="submit" value="Buscar" />
      </form>

      <section className="gridBuscador">

        {error ? (
          <h3>No se han encontrado recetas</h3>
        ) : isLoading ? (
          <h3>Cargando...</h3>
        ) : recipes?.length > 0 ? (
          recipes.map((recipe) => (
            <CardPublic key={recipe.recipe_id} {...recipe} />
          ))
        ) : (
          <h3>No hay recetas disponibles</h3>
        )}

      </section>

    </>
    
  )

}
