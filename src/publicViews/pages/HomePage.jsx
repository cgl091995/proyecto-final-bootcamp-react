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

        <div class="homepage-container">
            <div class="hero-section">
            <div class="text-content">
                <h1>Descubre el Chef que Llevas Dentro</h1>
                <p>
                Bienvenido a <strong>RECIPE APP</strong>, tu destino para recetas únicas, fáciles y deliciosas. 
                Explora una colección cuidadosamente seleccionada de platos que inspiran desde los sabores clásicos hasta lo más creativo.
                </p>
                <p>
                ¿No sabes por dónde empezar? Filtra por categorías como 
                <em>"Veganas", "Pescado", "Pollo"</em>, y encuentra la receta perfecta para tu momento.
                </p>
                <p><strong>¡Tu próxima creación está a solo un clic de distancia! 🍳✨</strong></p>
            </div>

            <div class="image-content">
                <img src="../../public/fotoIntro.png" alt="Mesa con platos deliciosos" />
            </div>
            </div>
        </div>

        <div>
            <section>
                <FormBusqueda />  
            </section>
        </div>            
                    
                </>
    )
}
