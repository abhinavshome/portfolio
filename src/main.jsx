import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/home/Home';
import Details from './pages/Details';
import Paintings from './pages/Paintings';
import Root from './Root';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/paintings",
        element: <Paintings/>,
      },
    
      {
        path: "/painting/:id/:slug",
        element: <Details />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
