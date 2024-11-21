import { useForm } from "../../hooks/useForm"



export const UpdateRecipe = () => {

  const { formulario, handlerSubmit, handlerChange} = useForm({
    title:"",
    description:"",
    instructions:"",
    ingredients:"",
    difficulty: "",
    preparation_time:"",
    foto:""
  })

  return (
    <>
    <div>UpdateRecipe</div>
   

  

    <form action="/admin"
          encType="multipart/form-data" 
          className="border p-4 rounded bg-light shadow-sm"
          id="formularioCrearReceta" 
          name="formularioCrearReceta" 
          onSubmit={handlerSubmit}
          >
            
          <div>
          <label htmlFor="title" className="form-label">Título</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            className="form-control" 
            required 
            value={formulario.title} 
            onChange={handlerChange} 
          />
          </div>

            
            <div>
                <label htmlFor="description" className="form-label">Descripción</label>
                <input type="text" id="description" name="description" className="form-control" required />
            </div>

           
            <div>
          <label htmlFor="description" className="form-label">Descripción</label>
          <input   //mirar textArea en lugar de este input
            type="text" 
            id="description" 
            name="description" 
            className="form-control" 
            required 
            value={formulario.description} 
            onChange={handlerChange} 
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
            value={formulario.instructions} 
            onChange={handlerChange} 
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
            value={formulario.ingredients} 
            onChange={handlerChange} 
          />
        </div>

        <div>
          <label htmlFor="difficulty">Dificultad</label>
          <select 
            id="difficulty" 
            name="difficulty" 
            className="form-control" 
            value={formulario.difficulty} 
            onChange={handlerChange} 
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
            value={formulario.preparation_time} 
            onChange={handlerChange} 
          />
        </div>

        <div>
          <label htmlFor="foto" className="form-label">Selecciona una foto</label>
          <input 
            type="file" 
            id="foto" 
            name="foto" 
            className="form-control" 
            onChange={handlerChange} 
          />
        </div>


            <input type="submit" className="btn btn-primary w-100" value="crear" />
        </form>
    
    </>
  )


    
  
}
//evento OnChange