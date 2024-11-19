import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useUser } from "../../hooks/useUser"
import { useFetch } from "../../hooks/useFetch"
import { FormBusqueda } from "../components/FormBusqueda"


export const HomePage = () => {

    const { mensaje, user } = useUser()
    // console.log(mensaje)
    // console.log(user)

 
    return (
        <>
            
            <section className="homePage">
                <h1>Bienvenidos a Recipe App</h1>   
            </section>
            <section className="homePage">        
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti odit blanditiis est delectus sequi soluta officia maiores deserunt corporis qui esse, perspiciatis provident sint consequatur! Soluta magni facere maxime!</p>  
            </section>
            <section>
                <FormBusqueda />
            </section>
            
            
        </>
    )
}
