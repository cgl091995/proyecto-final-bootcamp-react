import { createContext, useState } from "react";



/**
 * Contexto de usuario utilizado para manejar la autenticación y el estado del usuario
 * en toda la aplicación. Proporciona información sobre el estado de autenticación
 * y funciones para iniciar y cerrar sesión.
 */
export const UserContext = createContext()

/**
 * Proveedor del contexto de usuario. Este componente envuelve a otros componentes
 * para proporcionar acceso al contexto de usuario en toda la aplicación.
 * Administra el estado de autenticación y la información del usuario, permitiendo
 * que los componentes hijos puedan acceder a estos datos.
 * @param {object} children - Componentes hijos que estarán dentro del contexto de usuario.
 */
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({}) // Estado para guardar los datos del usuario
    const [isAuthenticated, setIsAuthenticated] = useState(false) // Estado para manejar la autenticación

    /**
     * Función que maneja el inicio de sesión, cambiando el estado de autenticación a `true`.
     */
    const login = () => setIsAuthenticated(true)

    /**
     * Función que maneja el cierre de sesión, cambiando el estado de autenticación a `false`
     * y limpiando los datos del usuario.
     */
    const logout = () => {
        setIsAuthenticated(false)// Desactiva la autenticación
        setUser({})// Limpia los datos del usuario
    }


    return (
        <UserContext.Provider value={{
            mensaje: 'Hola Mundo',
            user,
            setUser,
            isAuthenticated,
            login,
            logout

        }}>
            {children}
        </UserContext.Provider>
    )

}