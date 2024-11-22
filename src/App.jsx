import './App.css'
import {NavBar} from './ui/components/index'
import { UserProvider } from './context/UserContext'
import { AppRouters } from './routers/AppRouters'

function App() {
  
  return (
      <>
        <UserProvider>
          <header>
              <h1>Recipe App</h1>
          </header>

          <nav>
              <NavBar />
          </nav>

          <main>
              <AppRouters />
          </main>

          <footer>
          <p>© 2024 Recipe App. Todos los derechos reservados.</p>
          </footer>
        </UserProvider>
      </>
  )
}

export default App
