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
import About from './pages/About';
import Learn from './pages/Learn';

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
        path: "/painting/:id",
        element: <Details />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/learn',
        element: <Learn />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
