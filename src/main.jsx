import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/footer.jsx'


const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
  {
    path:'/Skills',
    element:<Skills/>
  },
  {
    path:'/ContactDetails',
    element:<Footer/>
  },
  {
    path:'/Aboutme',
    element:<About/>
  }]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>
)

