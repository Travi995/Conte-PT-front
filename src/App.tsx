import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import AuthView from './views/auth'
import LoginView from './views/login/login'
import { useEffect } from 'react'

const App = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    navigate('/login')
  },[])

  return <div className=' w-screen h-screen '>
    <Routes>
      <Route path='/' element={<AuthView />}>
        <Route path='login' element={<LoginView />} />
      </Route>

    </Routes>
  </div>
}
export default App
