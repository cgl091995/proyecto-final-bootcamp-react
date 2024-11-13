import { NavLink } from 'react-router-dom'
import './navBar.css'


export const NavBarPublic = () => {
  return (
    <>
    
      <ul className='publicNav'>
          <li><NavLink
              to='/'
              className={({ isActive }) => isActive ? 'menuActivo' : ''}>
              Recetas
              </NavLink>
          </li>

          <li><NavLink
              to='/carne'
              className={({ isActive }) => isActive ? 'menuActivo' : ''}>
              Carne
              </NavLink>
          </li>

          <li><NavLink
              to='/veganas'
              className={({ isActive }) => isActive ? 'menuActivo' : ''}>
              Veganas
              </NavLink>
          </li>
          <li><NavLink
              to='/aves'
              className={({ isActive }) => isActive ? 'menuActivo' : ''}>
              Aves
              </NavLink>
          </li>
          <li>
            <NavLink
                to="login"
                className={({ isActive }) => isActive ? 'menuActivo' : ''}
            >
                Login
            </NavLink>
        </li>

          
      </ul> 
    
    </>
  )
}
