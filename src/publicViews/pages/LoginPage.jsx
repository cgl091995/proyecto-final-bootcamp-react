import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const { mensaje, user, setUser, isAuthenticated, login } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault()

        const nombre = ev.target.nombre.value.trim()
        const password = ev.target.password.value.trim()


        /* comprobar qye existe usuario con ese nombre y contraseña en la base de datos*/

        const logeredUser = {
            id: 2,
            nombre,
            roll: 'admin'
        }

        setUser(logeredUser)
        login()
        navigate('/admin')
    }
    return (
        <>
            <code><pre>{JSON.stringify(user, null, " ")}</pre></code>
            <section>
            <h1>LoginPage</h1>            
            <p>{isAuthenticated ? 'está autenticado' : 'no está autenticado'}</p>
            </section>
            <form
                id='login'
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name='nombre'
                    id='nombre'
                    placeholder='Nombre'
                />
                <input
                    type="text"
                    name='password'
                    id='password'
                    placeholder='Password'
                />
                <button type='submit'>
                    Login
                </button>
            </form>
        </>
    )
}
