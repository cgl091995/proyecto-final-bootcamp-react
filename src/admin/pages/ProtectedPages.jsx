import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { GridGallery } from "../components/GridGallery"
import { useFetch } from "../../hooks/useFetch"

export const ProtectedPages = () => {
  const { logout } = useContext(UserContext)

  const handlerClick = () => {
      logout()
  }

  
  return (
      <>
          <p>Página Admin</p>

          <GridGallery />


          <button onClick={handlerClick}>logout</button>
      </>
  )
}
