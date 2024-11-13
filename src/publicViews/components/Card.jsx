import './card.css'

export const Card = ({categoria, receta, dificultad}) => {
    //argumentos importanción de función GridGallery

        return(

                <article className='card'>
                    <h3>{categoria}</h3>
                    <h4>{receta}</h4>
                    <h5>{dificultad}</h5>
                </article>




        )

}