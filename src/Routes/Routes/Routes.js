import { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/Home/AboutUs";
import Contact from "../../Pages/Home/Contact";
import Home from "../../Pages/Home/Home";
import Portfolio from "../../Pages/Home/Portfolio";
import Service from "../../Pages/Home/Service";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/protfolio',
                element:<Portfolio></Portfolio>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            }
        ]
    },
])
export default router;