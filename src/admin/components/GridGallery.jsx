import { useFetch } from '../../hooks/useFetch'
import {Card} from '../../publicViews/components/Card'
import '../../ui/components/gridGallery.css'

export const GridGallery = () =>{
        //llamamos al hook de fetch mandándole la categoria y devolverá array recetas    
        
        const urlBase= import.meta.env.VITE_URL_BASE

        const {data, error, isLoading} = useFetch(`${urlBase}/api/v1`)
    
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
                  (       
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