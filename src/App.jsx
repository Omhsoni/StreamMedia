import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Search from './pages/search'
import Watch from './pages/watch'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/watch/:id' element={<Watch/>}></Route>
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
