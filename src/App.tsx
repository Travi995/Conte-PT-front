import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import AuthView from './views/auth'
import LoginView from './views/login/login'
import { useEffect } from 'react'
import RegisterView from './views/register/resgister'
import StoreView from './views/store/store'
import AddStoreView from './views/addStore/addStore'

const App = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    navigate('/store/addStore')
  },[])

  return <div className=' w-screen h-screen '>
    <Routes>
      <Route path='/' element={<AuthView />}>
        <Route path='login' element={<LoginView />} />
        <Route path='register' element={<RegisterView />} />
      </Route>

      //routes Store
      <Route path='store' element={<StoreView />}>
        <Route path='addStore' element={<AddStoreView />} />
      </Route>

    </Routes>
  </div>
}
export default App
