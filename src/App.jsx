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
              Este es el footer
          </footer>
        </UserProvider>
      </>
  )
}

export default App
