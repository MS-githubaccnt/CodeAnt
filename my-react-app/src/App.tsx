import LoginScreen from './pages/LoginScreen'
import {BrowserRouter,Routes,Route} from "react-router-dom";;
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
