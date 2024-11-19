import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { useForm } from "../../hooks/useForm"



export const CreateRecipe = () => {

  const { formulario, handlerSubmit, handlerChange } = useForm({
      title: "",
      description: "",
      instructions: "",
      difficulty: "",
      preparation_time: "",
      ingredients: "",
      foto: "",
  });

  

  const url = import.meta.env.VITE_URL_BASE;

  
  const { data, error } = useFetch(`${url}/admin/create-recipe`, "POST", formulario);

 
  useEffect(() => {
      if (data) {
          console.log("Datos enviados correctamente:", data);
      }

      if (error) {
          console.error("Hubo un error al enviar la receta:", error);
      }
  }, [data, error]); 


  return (
    <>
    <p>Crea tu receta</p>

    <form encType="multipart/form-data" 
          onSubmit={handlerSubmit}
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
              <input   //mirar textArea en lugar de este input
                type="text" 
                id="description" 
                name="description" 
                className="form-control" 
                value={formulario.description} 
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
              value={formulario.instructions} 
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
