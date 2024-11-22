import { useFetch } from '../../hooks/useFetch'
import { CardPublic } from './CardPublic'
import '../../ui/components/gridGallery.css'
import { useState } from 'react'

/**
 * Componente que muestra una galería de recetas públicas por categoría.
 * 
 * Este componente obtiene las recetas de una categoría específica y las muestra en una galería de tarjetas. Utiliza el hook `useFetch` para obtener los datos desde el backend y manejar el estado de carga, error y datos.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.category - La categoría de recetas a mostrar, como 'pollo', 'vegetariana', etc.
 *
 * @returns {JSX.Element} Una galería de recetas mostrada como tarjetas. Si la carga está en progreso, muestra un mensaje de carga.
 */

export const GridGalleryPublic = ({category}) =>{
       
    const [datos,setDatos] = useState([]) // Estado para almacenar los datos de las recetas

    const url= `${import.meta.env.VITE_URL_BASE}/api/v1/recipes/${category}` // URL para la API con la categoría como parámetro

    const {data, error, isLoading, getData} = useFetch(url) // Hook personalizado useFetch para obtener datos

    const {recipes, ok, total_results, total_pages} = data // Desestructuración de los datos obtenidos

    

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