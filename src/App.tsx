import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthView from './views/auth'

const App = () => {

  return <div className=' w-screen h-screen '>
    <Routes>
      <Route path='/' element={<AuthView />}></Route>

    </Routes>
  </div>
}
export default App
