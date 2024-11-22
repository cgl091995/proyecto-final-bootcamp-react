
import { ExpandedCard } from '../components/ExpandedCard'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

export const RecetaId = () => {

    const {id} = useParams()

    console.log(id, "id receta")

    const url = `${import.meta.env.VITE_URL_BASE}/api/v1/${id}`;

   
    const { data, error } = useFetch(url);
    console.log(data)
  
   
    const recipe = Array.isArray(data?.recipes) ? data?.recipes?.[0] : data?.recipes;
    console.log(recipe)

  
    if (error) {
      console.error('Error al obtener la receta:', error);
    }
  
    return (
      <>
        {recipe ? (
          <ExpandedCard {...recipe} />
        ) : (
          <p>Cargando receta...</p>
        )}
      </>
    );
  };
