import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, Aves, Carne, Veganas, Vegetarianas } from "../publicViews/pages"
import { ProtectedPages } from "../admin/pages"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { CreateRecipe } from "../admin/pages/CreateRecipe"
import { DeleteRecipe } from "../admin/pages/DeleteRecipe"
import { UpdateRecipe } from "../admin/pages/UpdateRecipe"

export const AppRouters = () => {
    const { isAuthenticated } = useContext(UserContext)

    return(
    <Routes>

        {/*rutas públicas */}
    <Route path='/' element={<HomePage />} />
    <Route path='aves' element={<Aves />} />
    <Route path='carne' element={<Carne />} />
    <Route path='logIn' element={<LoginPage />} />
    <Route path='veganas' element={<Veganas />} />
    <Route path='vegetarianas' element={<Vegetarianas />} />
    <Route path='carne' element={<Carne />} />
    <Route path='/*' element={<Navigate to={'/'} />} />

        {/*rutas protegidas */}
        {/*rutas protegidas para el admin */}
     {
        isAuthenticated
        ?
        <Route exact path='/admin' element={<ProtectedPages />} />
        :
        <Route path='/*' element={<Navigate to = {'login'}/>}/>   
     }   
      {
        isAuthenticated
        ?
        <Route exact path='/create-recipe' element={<CreateRecipe />} />
        :
        <Route path='/*' element={<Navigate to = {'login'}/>}/>   
     }  
     {
        isAuthenticated
        ?
        <Route exact path='/update-recipe' element={<UpdateRecipe />} />
        :
        <Route path='/*' element={<Navigate to = {'login'}/>}/>   
     }  
     {
        isAuthenticated
        ?
        <Route exact path='/delete-recipe' element={<DeleteRecipe />} />
        :
        <Route path='/*' element={<Navigate to = {'login'}/>}/>   
     }  

    </Routes>
   
  )
    








}
