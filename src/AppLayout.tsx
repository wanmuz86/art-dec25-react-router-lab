import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AppLayout:React.FC = () => {
  return (
    <div>
        <nav>
            <ul>
                {/* NavLink similar to a href  but happens on react-router / browser / SPA*/}
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
        {/* THe section where the component will be replaced based on the path that 's defined in routes.tsx
        eg: 
        /about -> Outlet will be replace by <About/> component
        / -> Outlet will be replace <Home/>
        */}
        <Outlet/>
    </div>
  )
}

export default AppLayout