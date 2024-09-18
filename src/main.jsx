import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import { BrowserRouter } from 'react-router-dom'


// Its a way to route but its a lengthy one

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </StrictMode>,
)
