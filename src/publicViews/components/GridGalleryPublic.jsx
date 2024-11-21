import { useFetch } from '../../hooks/useFetch'
import { CardPublic } from './CardPublic'
import '../../ui/components/gridGallery.css'
import { useState } from 'react'

export const GridGalleryPublic = ({category}) =>{
        //llamamos al hook de fetch mandándole la categoria y devolverá array recetas    
        console.log(category)
        const [datos,setDatos] = useState([])

     const url= `${import.meta.env.VITE_URL_BASE}/api/v1/recipes/${category}`

    //  console.log(url, "url en gridGalleryPublic")

    const {data, error, isLoading, getData} = useFetch(url)

    // const updateData = async()=>{
    //     getData(url)
    // }


    const {recipes, ok, total_results, total_pages} = data

    // console.log(data)
 

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
                             <CardPublic key={recipe.recipe_id} {...recipe} />   //key pregunta de entrevista segura. la key es el identificador que utiliza react para localizar los elemento
                             )
                         )
                     )

            }
             
        </section> 
              
    </>    
        )
    
}