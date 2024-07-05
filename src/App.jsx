import './App.css'
import LoginPage from './LoginPage'
import Profile from './Profile'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import SignUp from './SignUp'


function App() {
   
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
     
 
  )
}

export default App
