import {Card} from './Card'





export const GridGallery = ({categoria}) =>{
        //llamamos al hook de fetch mandándole la categoria y devolverá array recetas                    
    const recipes=[
       
        {  
             id:1,
             categoria: `${categoria}`,
             receta: "carne guisada",
             dificultad: "dificil"


        },
         {
            id:2,
             categoria: `${categoria}`,
             receta: "pollo al limon",
             dificultad: "media" 
         },
         {
            id:3,
             categoria: `${categoria}`,
             receta: "steak tartar vegan",
             dificultad: "facil" 
             
         },
         {
            id:4,
             categoria: `${categoria}`,
             receta: "huevos cocidos",
             dificultad: "facil" 
             
         },

    ]
    

   
        
    
    
    return(

    <>
        
        {recipes.map((recipe)=>
            <Card key={recipe.id}   {...recipe}/>          //key pregunta de entrevista segura. la key es el identificador que utiliza react para localizar los elementos

            )
        }
       
    
    
  
              
    </>    
        )
    
}