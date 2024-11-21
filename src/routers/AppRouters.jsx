import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, Pollo, Pescado, Carne, Veganas, Vegetarianas, RecetaId } from "../publicViews/pages"
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

        {/* rutas públicas
    <Route path='/' element={<HomePage />} />
    {/* <Route path='/:id' element={<HomePage />} /> */}
    {/* <Route path='pollo' element={<Pollo />} />
    <Route path='carne' element={<Carne />} />
    <Route path='logIn' element={<LoginPage />} />
    <Route path='veganas' element={<Veganas />} />
    <Route path='vegetarianas' element={<Vegetarianas />} />
    <Route path='carne' element={<Carne />} />
    <Route path='pescado' element={<Pescado />} />
    <Route path='/*' element={<Navigate to={'/'} />} /> */} 
    

        {/*rutas protegidas */}
        {/*rutas protegidas para el admin */}
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
               <Route path='/*' element={<Navigate to={'/'} />} />
        </>  
     }   
     
      {/* {
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
     }   */}

    </Routes>
   
  )
    








}
