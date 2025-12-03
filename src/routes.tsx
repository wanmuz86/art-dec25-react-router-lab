import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AppLayout from "./AppLayout";
import User from "./pages/User";
import NavigateProgrammatically from "./pages/NavigateProgrammatically";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                index:true, element:<Home/>
            },
            {
                path:"about", element:<About/>
            },
            {
                // userId refers to the parameter passed in the url 
                // eg: user/1, user/2 ....
                path:"user/:userId", element:<User/>
            },
            {
                path:"navigate", element:<NavigateProgrammatically/>
            },
            {
                path:"*", element:<NotFound/>
            }
        ]
    }
])