//Dependencies 
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Componets 
import HomePage from './Componets/Home/Homepage'
import EditSong from './Componets/Edit/EditSong'
import FormPage from './Componets/Forms/FormPage'
import Navbar from './Componets/Navbar/Navbar'
import SongCard from './Componets/SongCard/SongsCard'
import SongPage from './Componets/Songs/SongsPage'

//Styles
import './App.css'

function App() {

  return (
    
      <div>
        <Router>
          <Navbar />
          <main>
            <Routes>

              <Route path='/' element = {<HomePage/>}/>
              <Route path='/songs' element = {<SongPage/>}/>
              <Route path='/songs/new' element = {<FormPage/>}/>
              <Route path='/songs/:id' element = {<EditSong/>}/>
              




            </Routes>
          </main>
          
        </Router>

      </div>
       

  )
}

export default App
