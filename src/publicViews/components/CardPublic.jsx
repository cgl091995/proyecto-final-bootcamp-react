import { Link } from 'react-router-dom'
import './card.css'

    export const CardPublic = ({title, description, instructions, difficulty, preparation_time, ingredients, fotos, recipe_id}) => {
        //argumentos importanción de función GridGallery
      console.log(recipe_id, "recipe_id en cardPublic")
            return(
    
                <article className="card">
                <header className="card-header">
                  <h2 className="card-title">{title}</h2>
                  <p className="card-description">{description}</p>
                </header>
              
                <div className="card-content">
                  <p><strong>Instrucciones:</strong> {instructions}</p>
                  <p><strong>Dificultad:</strong> {difficulty}</p>
                  <p><strong>Tiempo de preparación:</strong> {preparation_time} min</p>
                  <p><strong>Ingredientes:</strong> {ingredients.join(", ")}</p>
                </div>
              
                <div className="card-footer"> 
                {<Link to={`/${recipe_id}`} className="btn btn-primary">ver más</Link> }
                </div>
              </article>
    
    
            )
    
    }
