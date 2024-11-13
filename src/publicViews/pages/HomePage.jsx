import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useUser } from "../../hooks/useUser"


export const HomePage = () => {

    const { mensaje, user } = useUser()
    console.log(mensaje)
    console.log(user)

    return (
        <div>
            <code><pre>{JSON.stringify(user, null, " ")}</pre></code>

            <section className="homePage">
            <h1>Bienvenidos a Recipe App</h1>
            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti odit blanditiis est delectus sequi soluta officia maiores deserunt corporis qui esse, perspiciatis provident sint consequatur! Soluta magni facere maxime!</p>
            </section>
        </div>
    )
}
