import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import ProjectDetail_1 from './Components/ProjectDetail_1.jsx'
import ProjectDetail_2 from './Components/ProjectDetail_2.jsx'
import ProjectDetail_3 from './Components/ProjectDetail_3.jsx'
const router=createBrowserRouter([
  {
  path: "/",
    element: <App />,
    children :[
      {
      path : "/Project1",
      element : <ProjectDetail_1 />
    },
    {
      path : "/Project2",
      element : <ProjectDetail_2 />
    },
    {
      path : "/Project3",
      element : <ProjectDetail_3 />
    },
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
