import { NavLink } from "react-router-dom"

import './navBar.css'

export const NavBarAdmin = () => {
    return (

        <ul className="adminNav">

            <li>
                <NavLink
                    to="admin"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    Dashboard
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="create-recipe"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    Crea una receta
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="update-recipe"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    Edita una receta
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="delete-recipe"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    Borra una receta
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="logout"
                    className={({ isActive }) => isActive ? 'menuActivo' : ''}
                >
                    logout
                </NavLink>
            </li>

        </ul>
    )
}