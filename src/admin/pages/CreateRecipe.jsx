
import { useFetch } from "../../hooks/useFetch"
import { serializeForm } from "../helpers/serializeForm";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";


//title, description, instructions, difficulty, preparation_time, user_id, ingredients, main_ingredient, fotos


export const CreateRecipe = () => {

  const navigate = useNavigate()
  const {data, getData, isLoading, error} = useFetch()
  

  const createOnSubmit = async (ev) =>{
      ev.preventDefault()
    const formulario = serializeForm(ev.target)
   
   
      try {
            const url = `${import.meta.env.VITE_URL_BASE}/api/v1/create-recipe`;
         
            const resp = await getData (url, 'POST', formulario)
            console.log(resp, "resp en create-recipe")
              if(resp.ok){
                 navigate('/admin')
              }else{
                console.log('Error al crear receta')
              }
      } catch (error) {
                console.log(error)
            }

  }

  
  return (
    <>
    <p>Crea tu receta</p>

    <form  
          onSubmit={createOnSubmit}
          id="formularioCrearReceta" 
          name="formularioCrearReceta" 
          >
            
          <div>
          <label htmlFor="title" className="form-label">Título</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              className="form-control" 
              required 
            />
          </div>
           
        <div>
          <label htmlFor="description" className="form-label">Descripción</label>
              <textarea
                type="text" 
                id="description" 
                name="description" 
                className="form-control"  
                required 
            />
        </div>

        <div>
          <label htmlFor="instructions" className="form-label">Instrucciones</label>
            <input 
              type="text" 
              id="instructions" 
              name="instructions" 
              className="form-control"          
              required 
    
            />
        </div>

        <div>
          <label htmlFor="difficulty">Dificultad</label>
            <select 
              id="difficulty" 
              name="difficulty" 
              className="form-control" 
          
            >
              <option value="1">Fácil</option>
              <option value="2">Media</option>
              <option value="3">Difícil</option>
            </select>
        </div>

        <div>
          <label htmlFor="user_id">User</label>
            <select 
              id="user_id" 
              name="user_id" 
              className="form-control" 
          
            >
              <option value="1">admin</option>
              
            </select>
        </div>


        <div>
          <label htmlFor="preparation_time" className="form-label">Duración (minutos)</label>
            <input 
              type="number" 
              id="preparation_time" 
              name="preparation_time" 
              className="form-control" 
              min="1" 
              required 
          />
        </div>

        <div>
          <label htmlFor="ingredients" className="form-label">Ingredientes</label>
            <input 
              type="text" 
              id="ingredients" 
              name="ingredients" 
              className="form-control" 
              required  
          />
        </div>

        <div>
          <label htmlFor="main_ingredient">Ingrediente principal</label>
            <select 
              id="main_ingredient" 
              name="main_ingredient" 
              className="form-control" 
          
            >
              <option value="1">pollo</option>
              <option value="2">carne</option>
              <option value="3">vegetariano</option>
              <option value="4">vegano</option>
              <option value="5">pescado</option>
            </select>
        </div>


        <div>
          <label htmlFor="foto" className="form-label">Selecciona una foto</label>
            <input 
              type="file" 
              id="foto" 
              name="foto" 
              className="form-control"  
          />
        </div>

            <input type="submit" className="button-formulario" value="crear" />
        </form>
    
    </>
  )
}
