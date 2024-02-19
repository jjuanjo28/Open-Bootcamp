import React,{ useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom"
import HomePage from './Pages/Home/Home_page'
import ErrorPage from './Pages/error/404Error'
import LoginPage from './Pages/Login_Page/login_page'
import RegisterPage from './Pages/Register_Page/register_page'
import TaskPage from './Pages/Task_Page/Task_page'
import Button from '@mui/material/Button';
import UserList from './Pages/UserList/userList'
import {User} from "./components/pure/user.class"
import { selectUnstyledClasses } from '@mui/base'
import RickAndMortyPage from './Pages/RickAndMorty/rickAndMorty_Page'
import RickAndMortyMujeres from './Pages/RickAndMorty/rickAndMortyMujeres'
import RickAndMorty_All from './Pages/RickAndMorty/rickAndMorty_All'
import RMCharacter from './Pages/RickAndMorty/R&M_Character'
import RMLocation from './Pages/RickAndMorty/R&M_Location'
import RMEpisode from './Pages/RickAndMorty/R&M_Episode'
import RickAndMortyHombres from './Pages/RickAndMorty/rickAndMortyHombres'
import RMLive from './Pages/RickAndMorty/R&M_Live'
import RMDead from './Pages/RickAndMorty/R&M_Dead'
import RMUnknown from './Pages/RickAndMorty/R&M_Unknown'
import RMGenderless from './Pages/RickAndMorty/R&M_Genderless'
import NewAllCharacters from './Pages/RickAndMorty/NewAll_Characters'

function App() {

  const userOne = new User("pepino","Tonut","jt@gmail.com","1234",false)
  const userTwo = new User("salamandro","Tonut","pedro@gmail.com","1234",false)
 
  const [logged, setlogged] = useState(true)
  const [user, setUser] = useState([userOne,userTwo])
 
 
  

  function padre() {
    setlogged(!logged)
  }
  function changeState(datos) {
    setlogged(datos)
  }
 
  return (
    <div className="App">
         
         <Router>
         <Link to={"/"} element={<HomePage/>}>|| HOME |</Link>
         <Link to={"/login"} element={<LoginPage/>}>| LOGIN |</Link>
         <Link to={"/register"} element={<RegisterPage/>}>| REGISTER ||</Link>
          
          <Button  style={{
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        margin: 10        
    }} variant="contained"  onClick={()=> padre()}>Change State</Button>
          <Routes>
            <Route exact path='/' element={<HomePage  padreAHijo={logged} hijoAPadre={changeState}/>}/>
            <Route path="/userList" element={<UserList verUserList={user} modificaUserList={setUser} />}/>
            <Route path="/login" element={<LoginPage verObjeto={user} modificarObjeto={setUser}/>}/>
            <Route path="/register" element={<RegisterPage verObjeto={user} modificarObjeto={setUser} />}/>
            <Route path="/task" element={
                    logged ? <TaskPage/> : <Navigate replace to="/login"/>}/>
            <Route path='/RickAndMorty' element={<RickAndMortyPage/>}/> 
            <Route path='/RickAndMorty/character' element={<RMCharacter/>}/>
            <Route path='/RickAndMorty/location' element={<RMLocation/>}/>
            <Route path='/RickAndMorty/episode' element={<RMEpisode/>}/>
            <Route path='/RickAndMorty/character/mujeres' element={<RickAndMortyMujeres/>}/>
            <Route path='/RickAndMorty/character/hombres' element={<RickAndMortyHombres/>}/>
            <Route path='/RickAndMorty/character/genderless' element={<RMGenderless/>}/>
            <Route path="/RickAndMorty/character/allCharacters" element={<RickAndMorty_All/>}/>
            <Route path="/RickAndMorty/character/live" element={<RMLive/>}/>
            <Route path="/RickAndMorty/character/dead" element={<RMDead/>}/>
            <Route path="/RickAndMorty/character/unknown" element={<RMUnknown/>}/>
            <Route path="/RickAndMorty/character/newAllCharacters" element={<NewAllCharacters/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
         </Router>
    </div>
  )
}

export default App
