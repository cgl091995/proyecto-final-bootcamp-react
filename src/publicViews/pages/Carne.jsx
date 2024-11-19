import { useFetch } from "../../hooks/useFetch"
import { GridGalleryPublic } from "../components/GridGalleryPublic"




export const Carne = () => {

  const category="carne"
   
  return (
    <>
    <h1>Carne</h1>

    
  <GridGalleryPublic category={category} />    



  </>
  )
}
