import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { serializeForm } from "../helpers/serializeForm"



export const UpdateRecipe = () => {
  const {id} = useParams()

  console.log(id, "id receta")
  const navigate = useNavigate()
  // const { form, setForm} = useState({
  //   title:"",
  //   description:"",
  //   instructions:"",
  //   difficulty: "",
  //   user_id:"",
  //   preparation_time:"",
  //   ingredients:"",
  //   main_ingredient:"",
  //   foto:""
  // })

    const url = `${import.meta.env.VITE_URL_BASE}/api/v1/edit-recipe/${id}`
    const {data, getData, isLoading, error} = useFetch(url)
    // const {recipes} = data
    // console.log(recipes)

    const editOnSubmit = async (ev) =>{
      ev.preventDefault()
      const formulario = serializeForm(ev.target)
      try {
        const resp = await getData(url, 'PUT', formulario)
        console.log(resp, "resp en editar recitar")
              if(resp.ok){
                 navigate('/admin') // Redirige a la página de inicio de admin si la creación es exitosa
              }else{
                console.log('Error al editar receta') 
              }
      } catch (error) {
        console.log(error, "no se ha editado la receta")
      }
    }
  return (
    <>
    <h1>Editar recetas</h1>
   

    <form  
          onSubmit={editOnSubmit}
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
              defaultValue={data.title}
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
                defaultValue={data.description}  
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
              defaultValue={data.instructions}       
              required 
    
            />
        </div>

        <div>
          <label htmlFor="difficulty">Dificultad</label>
            <select 
              id="difficulty" 
              name="difficulty" 
              className="form-control" 
              defaultValue={data.difficulty}
          
            >
              <option value="easy">Fácil</option>
              <option value="medium">Media</option>
              <option value="hard">Difícil</option>
            </select>
        </div>

        <div>
          <label htmlFor="user_id">User</label>
            <select 
              id="user_id" 
              name="user_id" 
              className="form-control" 
              defaultValue={data.user_id}
          
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
              defaultValue={data.preparation_time}
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
              defaultValue={data.ingredients}
              required  
          />
        </div>

        <div>
          <label htmlFor="main_ingredient">Ingrediente principal</label>
            <select 
              id="main_ingredient" 
              name="main_ingredient" 
              className="form-control" 
              defaultValue={data.main_ingredient}
          
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
              defaultValue={data.foto} 
          />
        </div>

            <input type="submit" className="button-formulario" value="editar formulario" />
        </form>
    
    </>
  )


    
  
}
//evento OnChange