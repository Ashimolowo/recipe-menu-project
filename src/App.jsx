import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import { useTheme } from './hooks/useTheme'

import './App.css'
import ContextSelector from './components/context/ContextSelector'

// pages
import Home from './page/home/Home'
import Recipe from './page/recipe/Recipe'
import Search from './page/search/Search'
import Create from './page/create/Create'

function App() {
  const {mode} = useTheme()
  console.log('mode:', mode)

  return (
  <div className={`App ${mode}`}>
   
    <Router>
      <Navbar />
      <ContextSelector />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/search' element={<Search />} />
        <Route path='/recipe/:id' element={<Recipe />} />
       </Routes>
    </Router>
  </div>
  )
}

export default App
