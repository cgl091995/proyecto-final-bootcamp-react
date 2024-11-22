import { useFetch } from '../../hooks/useFetch'
import {Card} from '../../publicViews/components/Card'
import '../../ui/components/gridGallery.css'

/**
 * Componente GridGallery que obtiene y muestra una cuadrícula de tarjetas de recetas.
 * Utiliza el hook personalizado `useFetch` para obtener las recetas de una API
 * y luego renderiza las recetas como componentes `Card`.
 */
export const GridGallery = () =>{
          
        // URL base para la API
        const urlBase= import.meta.env.VITE_URL_BASE

        // Obtener datos usando el hook personalizado useFetch
        const {data, error, isLoading} = useFetch(`${urlBase}/api/v1`)
    
          // Desestructurar los datos de la respuesta
        const {recipes, ok, total_results, total_pages} = data
    
        console.log(data)

    return(
        
      <>
      <section className='grid-gallery'>
          
          {
              isLoading 
                  ?
                      <h3>CARGANDO...</h3>
                  :
                  (   // Iterar sobre las recetas y mostrarlas en el componente Card
                      recipes.map((recipe)=>(
                          <Card key={recipe.recipe_id} {...recipe} />   //key pregunta de entrevista segura. la key es el identificador que utiliza react para localizar los elemento
                          )
                      )
                  )

          }
           
      </section> 
            
  </>    
        )
    
}