import { useState } from 'react'
import context from './MyContext'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'   
import './App.css'

function App() {
  const  [auth,setAuth]=useState(false);

  return (
    <context.Provider value={{auth,setAuth}}>
    <Router>
    <Routes>
     <Route exact path="/" element={<Home />} />
         <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} /> 
       
    </Routes>
    </Router>
    </context.Provider>
  )
}

export default App
