import { NavLink } from 'react-router-dom'
import './navbar.css'


export const NavBarPublic = () => {
  return (
    <>
    
      <ul className='publicNav'>
          <li><NavLink
              to='/'
              className={({ isActive }) => isActive ? 'menuActivo' : ''}>
              HOME
              </NavLink>
          </li>

          <li><NavLink
              to='/carne'
              className={({ isActive }) => isActive ? 'menuActivo' : ''}>
              CARNE
              </NavLink>
          </li>

          <li><NavLink
              to='/veganas'
              className={({ isActive }) => isActive ? 'menuActivo' : ''}>
              VEGANAS
              </NavLink>
          </li>
          <li><NavLink
              to='/pollo'
              className={({ isActive }) => isActive ? 'menuActivo' : ''}>
              AVES
              </NavLink>
          </li>
          <li><NavLink
              to='/vegetarianas'
              className={({ isActive }) => isActive ? 'menuActivo' : ''}>
              VEGETARIANAS
              </NavLink>
          </li>
          <li><NavLink
              to='/pescado'
              className={({ isActive }) => isActive ? 'menuActivo' : ''}>
              PESCADO
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
