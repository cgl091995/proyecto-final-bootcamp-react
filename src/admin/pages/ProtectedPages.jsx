import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { GridGallery } from "../components/GridGallery"
import { useFetch } from "../../hooks/useFetch"
import { Link } from "react-router-dom"

/**
 * Componente para mostrar las páginas protegidas de la aplicación.
 * Este componente permite al usuario acceder a las recetas mediante el componente `GridGallery`.
 * Además, tiene la opción de cerrar sesión al hacer clic en el botón de "log out".
 */
export const ProtectedPages = () => {
  const { logout } = useContext(UserContext)

  /**
   * Función que maneja el evento de clic en el botón de logout.
   * Llama al método `logout` del contexto de usuario para cerrar sesión.
   */
  const handlerClick = () => {
      logout() // Llama a la función de logout del contexto
  }

  
  return (
      <>
          

          <GridGallery />


          <button onClick={handlerClick}><Link to={'/'}>log Out</Link></button>
      </>
  )
}
