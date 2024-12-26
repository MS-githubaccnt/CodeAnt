import LoginScreen from './pages/LoginScreen'
import {BrowserRouter,Routes,Route} from "react-router-dom";;
import './App.css'
import RepositoryScreen from './pages/RepositoryScreen';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginScreen/>}/>
      <Route path='/repository'element={<RepositoryScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
