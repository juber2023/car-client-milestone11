import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import ContextApi from './Components/ContextApi';
import Checkout from './Components/Checkout';
import Bookings from './Components/Bookings';
import PrivateRouter from './Components/PrivateRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>not found</div>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/checkout/:id',
            element:<PrivateRouter><Checkout></Checkout></PrivateRouter>,
            loader:({params})=>fetch(`https://car-server-beige.vercel.app/checkout/${params.id}`)
        },
        {
            path:'/bookings',
            element:<PrivateRouter><Bookings></Bookings></PrivateRouter>,
        },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-7xl mx-auto'>
<React.StrictMode>
  <ContextApi>
  <RouterProvider router={router} />
  </ContextApi>

  </React.StrictMode>,
</div>
)
