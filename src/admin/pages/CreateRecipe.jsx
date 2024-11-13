

export const CreateRecipe = () => {


  const handleSubmit = (ev) => {
      ev.preventDefault()
    }

  return (
    <>
    <p>Crea tu receta</p>

    <form action="/admin"
          method="POST" 
          enctype="multipart/form-data" 
          className="border p-4 rounded bg-light shadow-sm" id="formularioCrearReceta" name="formularioCrearReceta" onSubmit={handleSubmit}>
            
            <div class="form-group mb-3">
                <label for="title" class="form-label">Título</label>
                <input type="text" id="title" name="title" className="form-control" required />
            </div>

            
            <div class="form-group mb-3">
                <label for="description" class="form-label">Descripción</label>
                <input type="text" id="description" name="description" className="form-control" required />
            </div>

           
            <div class="form-group mb-3">
                <label for="instructions" class="form-label">Instrucciones</label>
                <input type="text" id="instruction" name="instruction" className="form-control" required />
            </div>

            <div class="form-group mb-3">
                <label for="ingredients" class="form-label">Ingredientes</label>
                <input type="text" id="ingredients" name="ingredients" className="form-control" required />
            </div>

            <div className="form-group mb-3">
                  <label for="difficulty">Dificultad</label>
                  <select id="difficulty" name="difficulty">  
                    <optgroup value="difficulty">
                    <option value="1">Fácil</option>
                    <option value="2">Media</option>
                    <option value="3">Dificil</option>
                    </optgroup>
                  </select>
             </div>

            
            <div class="form-group mb-3">
                <label for="preparation_time" className="form-label">Duración (minutos)</label>
                <input type="number" id="preparation_time" name="preparation_time" class="form-control" min="1" required />
            </div>

            <div class="form-group mb-3">
                <label for="foto" className="form-label">Selecciona una foto</label>
                <input type="text" id="foto" name="foto" class="form-control" required /> 
            </div>

            <input type="submit" className="btn btn-primary w-100" value="crear" />
        </form>
    
    </>
  )
}
