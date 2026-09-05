import Login from './pages/Login.jsx'
import Homepage from './pages/Homepage.jsx'
import Register from './pages/Register.jsx'
import {Routes , Route} from 'react-router-dom'
import Navg from './components/nav/Navbar.jsx'
import BottomNav from './components/footer/BottomNav.jsx'
const App = () => {
  return (
    <div>
      <Navg/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Homepage/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <BottomNav/>
    </div>
  )
}

export default App