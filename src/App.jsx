import { useState } from 'react'

import './App.css'
import { Header,About ,Intro,Skills,MyExperience,Project, Footer} from './components/index.js'


function App() {

  return (
    <>
    
    <Header/>
    <Intro/>
    <About/>
    <Skills/>
    <MyExperience/>
    <Project/>
    <Footer/>
    </>
    
  )
}

export default App
