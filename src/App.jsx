import React from 'react'
import Banner from './components/Banner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import History from './components/History'
import Team from './components/Team'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={ <Banner/>} path='/'/>
        <Route element={<History/>} path='/history'/>
        <Route element={<Team/>} path='/team'/>
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App