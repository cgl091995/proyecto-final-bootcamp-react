import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { GridGallery } from "../components/GridGallery"
import { useFetch } from "../../hooks/useFetch"
import { Link } from "react-router-dom"

export const ProtectedPages = () => {
  const { logout } = useContext(UserContext)

  const handlerClick = () => {
      logout()
  }

  
  return (
      <>
          

          <GridGallery />


          <button onClick={handlerClick}><Link to={'/'}>log Out</Link></button>
      </>
  )
}
