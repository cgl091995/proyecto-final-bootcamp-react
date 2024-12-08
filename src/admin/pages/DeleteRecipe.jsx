import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { ExpandedCard } from "../../publicViews/components/ExpandedCard";

export const DeleteRecipe = () => {
  const {recipe_id} = useParams();
  const url = `${import.meta.env.VITE_URL_BASE}/api/v1/delete-recipe/${recipe_id}`;
  const {data, error, isLoading, getData} = useFetch(url);
  const {message, recipes} = data;
  console.log(message)
  const navigate = useNavigate();


  const deleteOnClick = async (ev) => {
    ev.preventDefault();
    try {
      const resp = await getData(url, 'DELETE');
      console.log(resp, 'Receta eliminada');
      if(resp.ok){
        navigate('/admin')
      } else {
        console.log ('Error al eliminar la receta')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <h1 className="h1">Eliminar Receta</h1>
    <h2 className="h2">Estas seguro de que quieres eliminar la siguiente receta:</h2>
    
    {
        isLoading && <p>Cargando...</p>
    }

    <section>
    {/* {
      error
      ?
      <p>{message}</p>
      :
      <ExpandedCard key={recipe_id} {...recipes}/>   
      }  */}

    </section> 

    <section className="box">
      <div>

        <button className="deletebutton"
                onClick={deleteOnClick}>
              Borrar
        </button>

        <button className="button">
        <Link 
            to='/admin'>
              Cancelar</Link>
        </button>

      </div>
    </section>
    
    </>

  )
}