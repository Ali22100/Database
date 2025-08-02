import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginSignup from './Screens/LoginSignup'
import DatabaseScreen from './Screens/DatabaseScreen'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/loginsignup' element={<LoginSignup/>}/>
        <Route path='/databasescreen' element={<DatabaseScreen/>}/>
      </Routes>
    </div>
  )
}

export default App
