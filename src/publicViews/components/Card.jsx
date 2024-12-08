import { Link } from 'react-router-dom'
import './card.css'

export const Card = ({recipe_id, title, description, instructions, difficulty, preparation_time, ingredients, fotos}) => {
    //argumentos importanción de función GridGallery
    
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
                {<button className='buttonCard'><Link to={`/update-recipe/${recipe_id}`}>editar</Link></button>}
                {<button className='buttonCard'><Link to={`/delete-recipe/${recipe_id}`}>borrar</Link></button>}
            </div>

          </article>
          




        )

}