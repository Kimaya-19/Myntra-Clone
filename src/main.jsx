import { StrictMode } from 'react'
import React from "react";
import ReactDOM from "react-dom/client"; // Ensure this line is present
import App from './routes/App.jsx'
import './index.css'
import Men from "./components/Men.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bag from "./routes/Bag.jsx"
import {Provider} from "react-redux"
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx';
import myntraStore from './store/index.js';
import Women from './components/Women.jsx';
import Leaving from './components/Leaving.jsx';
import Beauty from './components/Beauty.jsx';
import Studio from './components/Studio.jsx';
import Kids from './components/Kids.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      },
      { path: "/men", element: <Men /> }, 
      { path: "/women", element: <Women /> },  
      { path: "/living", element: <Leaving /> },   
      {
        path:"/beauty",element:<Beauty />},
        {path:"/studio",element:<Studio />},
        {path:"/kids",element:<Kids />}


 
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
