
import { createBrowserRouter } from "react-router-dom";
import Root from "../Componentes/Root/Root";
import Error from "../Componentes/Error/Error";
import Home from "../Componentes/Home/Home"; 
import Services from "../Componentes/Home/Services/Services";
import About from "../Componentes/Home/About/About";
import Gallery from "../Componentes/Home/Gallery/Gallery";
import Price from "../Componentes/Home/Price/Price";
import Contract from "../Componentes/Home/Contract/Contract";
import Review from "../Componentes/Home/Review/Review";
import Login from "../Componentes/Login/Login";
import Register from "../Componentes/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
 


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<PrivetRoute><Services></Services></PrivetRoute>
            },
            {
                path:'/about',
                element:<PrivetRoute><About></About></PrivetRoute>
            },
            {
                path:'/gallery',
                element:<PrivetRoute><Gallery></Gallery></PrivetRoute>
            },
            {
                path:'/price',
                element:<PrivetRoute><Price></Price></PrivetRoute>
            },
            {
                path:'/review',
                element:<PrivetRoute><Review></Review></PrivetRoute>
            },
            {
                path:'/contract',
                element:<Contract></Contract>
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },

        ]
    },
]);

export default router;