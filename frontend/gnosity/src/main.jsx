import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoginSignup from './components/signup.jsx';
import Dashboard from './components/dashboard.jsx';

const router = createBrowserRouter([
  {path:"/", element: <LoginSignup/>},
  {path:"/Dashboard", element: <Dashboard />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
