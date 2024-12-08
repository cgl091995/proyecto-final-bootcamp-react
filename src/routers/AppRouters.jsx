import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, Pollo, Pescado, Carne, Veganas, Vegetarianas, RecetaId } from "../publicViews/pages"
import { ProtectedPages } from "../admin/pages"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { CreateRecipe } from "../admin/pages/CreateRecipe"
import { DeleteRecipe } from "../admin/pages/DeleteRecipe"
import { UpdateRecipe } from "../admin/pages/UpdateRecipe"
import { FormBusqueda } from "../publicViews/components/FormBusqueda"


/**
 * Componente que define las rutas y la navegación de la aplicación.
 * 
 * Este componente gestiona las rutas tanto públicas como protegidas, dependiendo del estado de autenticación del usuario.
 * Si el usuario está autenticado, se muestran las rutas para las páginas de administración (crear, actualizar, eliminar recetas).
 * Si el usuario no está autenticado, se muestran las rutas públicas para explorar las recetas y acceder al login.
 * 
 * @returns {JSX.Element} El componente con las rutas y redirecciones de la aplicación.
 */
export const AppRouters = () => {
    const { isAuthenticated } = useContext(UserContext)

    return(
   <Routes>

     {
        isAuthenticated
        ?
        <>
               <Route exact path='/admin' element={<ProtectedPages />} />
               <Route exact path='/create-recipe' element={<CreateRecipe />} />
               <Route exact path='/update-recipe/:id' element={<UpdateRecipe />} />
               <Route exact path='/delete-recipe/:id' element={<DeleteRecipe />} />
               <Route path='/*' element={<Navigate to={'/'} />} />
      </>
        :
    <>
           {/*rutas públicas */}
               <Route path='/' element={<HomePage />} />
               <Route path="/:id" element={<RecetaId />} /> 
               <Route path='pollo' element={<Pollo />} />
               <Route path='carne' element={<Carne />} />
               <Route path='logIn' element={<LoginPage />} />
               <Route path='veganas' element={<Veganas />} />
               <Route path='vegetarianas' element={<Vegetarianas />} />
               <Route path='carne' element={<Carne />} />
               <Route path='pescado' element={<Pescado />} />
               <Route path="/search/:title" element={<HomePage />} />
               <Route path='/*' element={<Navigate to={'/'} />} />
      </>  
     }   
     
   </Routes>
   
  )
    

}
