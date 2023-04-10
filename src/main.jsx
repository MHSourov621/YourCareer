import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Statistics from './component/Statistics/Statistics';
import Main from './component/Main/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
    children : [
      {
        path : "/",
        element : <Main></Main>,
        loader : () => fetch('jobs.json'),
      },
      {
        path : "/statistics",
        element : <Statistics></Statistics>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
